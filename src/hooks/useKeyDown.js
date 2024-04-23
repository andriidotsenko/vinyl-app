import PropTypes from "prop-types";
import { useEffect } from "react";

function useKeyDown(callback, eventCodes, hasCallbackPermission) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (eventCodes.includes(event.code)) {
        if (
          (event.code === "Space" && event.target.tagName === "TEXTAREA") ||
          event.target.tagName === "INPUT"
        ) {
          return;
        }
        event.preventDefault();
        if (hasCallbackPermission) {
          callback();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [callback, eventCodes, hasCallbackPermission]);
}

useKeyDown.propTypes = {
  callback: PropTypes.func.isRequired,
  eventCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default useKeyDown;
