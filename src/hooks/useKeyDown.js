import PropTypes from "prop-types";

import { useEffect } from "react";

function useKeyDown(callback, eventCodes) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (eventCodes.includes(event.code)) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [callback, eventCodes]);
}

export default useKeyDown;

useKeyDown.propTypes = {
  callback: PropTypes.func.isRequired,
  eventCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
