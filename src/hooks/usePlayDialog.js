import { useEffect } from "react";
import useKeyDown from "./useKeyDown";

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

  useKeyDown(handlePlay, ["Space", "Play"]);
};

export default usePlayDialog;
