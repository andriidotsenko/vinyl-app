import { useEffect } from "react";

const usePlayEnd = (onPlayEnd, handlePlay) => {
  useEffect(() => {
    let playTimeout;
    if (onPlayEnd) {
      playTimeout = setTimeout(() => {
        handlePlay();
      }, 30000);
    }

    return () => {
      clearTimeout(playTimeout);
    };
  }, [onPlayEnd, handlePlay]);
};

export default usePlayEnd;
