import { useEffect } from "react";

export function useBodyScrollDisabled(isDisabled) {
  useEffect(() => {
    if (isDisabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDisabled]);
}
