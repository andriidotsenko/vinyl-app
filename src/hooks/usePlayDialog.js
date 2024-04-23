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
};

export default usePlayDialog;
