import { useEffect } from "react";

const usePlayEnd = (isPlayEnded, handlePlay) => {
  useEffect(() => {
    let playTimeout;
    if (isPlayEnded) {
      playTimeout = setTimeout(() => {
        handlePlay();
      }, 30000);
    }

    return () => {
      clearTimeout(playTimeout);
    };
  }, [isPlayEnded, handlePlay]);
};

export default usePlayEnd;
