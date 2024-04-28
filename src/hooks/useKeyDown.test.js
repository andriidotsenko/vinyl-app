import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useKeyDown from "./useKeyDown";

describe("useKeyDown", () => {
  it("calls callback on key press with valid event code", () => {
    const callback = vi.fn();
    const eventCodes = ["Enter"];
    renderHook(() => useKeyDown(callback, eventCodes));

    const event = new KeyboardEvent("keydown", { code: "Enter" });
    window.dispatchEvent(event);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("does not call callback on key press with invalid event code", () => {
    const callback = vi.fn();
    const eventCodes = ["Enter"];
    renderHook(() => useKeyDown(callback, eventCodes));

    const event = new KeyboardEvent("keydown", { code: "Escape" });
    window.dispatchEvent(event);

    expect(callback).not.toHaveBeenCalled();
  });

  it("ndoes not call callback on key press with other event codes", () => {
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
      const event = new KeyboardEvent("keydown", { code });
      window.dispatchEvent(event);
      expect(callback).not.toHaveBeenCalled();
    }
  });

  it("throws an error with invalid callback or key code", () => {
    const invalidCallback = "not a function";
    let error = null;
    try {
      renderHook(() => useKeyDown(invalidCallback, []));
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });
});
