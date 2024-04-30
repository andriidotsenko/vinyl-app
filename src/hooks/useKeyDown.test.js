import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useKeyDown from "./useKeyDown";
import { userEvent } from "@testing-library/user-event";

describe("useKeyDown", () => {
  it("calls callback on key press with valid event code", async () => {
    const callback = vi.fn();
    const eventCodes = ["Enter"];
    renderHook(() => useKeyDown(callback, eventCodes));

    await userEvent.keyboard("[Enter]");

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("does not call callback on key press with invalid event code", async () => {
    const callback = vi.fn();
    const eventCodes = ["Enter"];
    renderHook(() => useKeyDown(callback, eventCodes));

    await userEvent.keyboard("[Escape]");

    expect(callback).not.toHaveBeenCalled();
  });

  it("does not call callback on key press with other event codes", async () => {
    const callback = vi.fn();
    const eventCodes = ["Enter"];
    renderHook(() => useKeyDown(callback, eventCodes));

    const allKeyCodes = [];

    for (let i = 65; i <= 90; i++) {
      allKeyCodes.push(`Key${String.fromCharCode(i)}`);
    }

    for (let i = 48; i <= 57; i++) {
      allKeyCodes.push(`Digit${String.fromCharCode(i)}`);
    }

    const specialKeys = [
      "Space",
      "ShiftLeft",
      "ShiftRight",
      "ControlLeft",
      "ControlRight",
      "AltLeft",
      "AltRight",
      "Tab",
      "Escape",
      "CapsLock",
      "Backspace",
      "Insert",
      "Delete",
      "Home",
      "End",
      "PageUp",
      "PageDown",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
    ];
    allKeyCodes.push(...specialKeys);

    for (const code of allKeyCodes) {
      await userEvent.keyboard(code);
    }

    expect(callback).not.toHaveBeenCalled();
  });

  it("throws an error if callback is not a function", () => {
    const invalidCallback = "not a function";

    expect(() =>
      renderHook(() => useKeyDown(invalidCallback, []))
    ).toThrowError("useKeyDown: Callback must be a function.");
  });
});
