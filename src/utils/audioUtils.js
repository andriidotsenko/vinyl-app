const VOLUME_TRACK = 0.1;
const VOLUME_ACTION = 0.01;

export const playAudio = async (trackRef) => {
  trackRef.current.load();
  trackRef.current.volume = VOLUME_TRACK;
  trackRef.current.play();
};

export const pauseAudio = async (trackRef) => {
  trackRef.current.pause();
  trackRef.current.currentTime = 0;
};

export const playOpenSound = async (actionSoundRef) => {
  actionSoundRef.current.load();
  actionSoundRef.current.volume = VOLUME_ACTION;
  actionSoundRef.current.play();
};

export const pauseOpenSound = async (actionSoundRef) => {
  actionSoundRef.current.pause();
  actionSoundRef.current.currentTime = 0;
};
