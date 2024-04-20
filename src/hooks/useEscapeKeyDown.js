import { useEffect } from "react";

const useEscapeKeyDown = (callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
};

export default useEscapeKeyDown;
