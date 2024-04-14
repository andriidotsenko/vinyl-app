export const animateVinylEnable = async (controlsVinyl) => {
  await controlsVinyl.start({
    scale: 0.9,
    transition: { duration: 0.5 },
  });
  await controlsVinyl.start({
    scale: 0.9,
    transition: { duration: 0.5 },
    zIndex: -100,
    x: 250,
  });
  await controlsVinyl.start({
    transition: { duration: 0.5 },
    zIndex: 100,
  });
  await controlsVinyl.start({
    transition: { duration: 0.5 },
    scale: 1.1,
    x: 200,
  });
  await controlsVinyl.start({
    rotate: 360,
    transition: { delay: 0.2, duration: 5, repeat: Infinity, ease: "linear" },
  });
};

export const animateVinylDisable = async (controlsVinyl) => {
  await controlsVinyl.start({
    rotate: -0,
    transition: { duration: 1, repeat: 0 },
  });
  await controlsVinyl.start({
    scale: 0.9,
    transition: { duration: 0.5 },
    zIndex: -100,
    x: 250,
  });
  await controlsVinyl.start({
    scale: 0.8,
    transition: { duration: 0.5 },

    x: 0,
  });
  await controlsVinyl.start({
    scale: 1,
    transition: { duration: 0.5 },

    x: 0,
  });
  await controlsVinyl.stop({});
};

export const animateCoverEnable = async (controlsCover) => {
  await controlsCover.start({
    scale: 0.9,
    transition: { duration: 0.5 },
  });
  await controlsCover.start({
    transition: { duration: 0.5 },
    zIndex: -99,

    x: -30,
  });
  await controlsCover.start({
    scale: 0.76,

    rotate: -5,
    transition: { duration: 0.5 },
    x: -40,
  });
};
export const animateCoverDisable = async (controlsCover) => {
  await controlsCover.start({
    transition: { delay: 0.5, duration: 0.5 },
    zIndex: -99,
    rotate: 0,
    x: -100,
  });
  await controlsCover.start({
    scale: 0.9,
    transition: { duration: 0.5 },
  });

  await controlsCover.start({
    transition: { duration: 0.5 },
    rotate: 0,
    x: 0,
  });
  await controlsCover.start({
    transition: { duration: 0.5 },
    scale: 1,
  });
  await controlsCover.stop({});
};
