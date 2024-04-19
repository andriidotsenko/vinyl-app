import { useEffect } from "react";

const usePlayDialog = (isPlay, handlePlay) => {
  useEffect(() => {
    let playTimeout;
    if (isPlay) {
      playTimeout = setTimeout(() => {
        handlePlay();
      }, 30000);
    }

    return () => {
      clearTimeout(playTimeout);
    };
  }, [isPlay, handlePlay]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        handlePlay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handlePlay]);
};

export default usePlayDialog;
