import clsx from "clsx";
import styles from "./ModalVinyl.module.css";
import { Link } from "react-router-dom";
import PlayButton from "../PlayButton/PlayButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useCountryListAsync } from "../../hooks/useCountryListAsync";
import { useState } from "react";
import { CloseIcon } from "../Icon/CloseIcon";
import { motion, useAnimation } from "framer-motion";
import CollectionButton from "../CollectionButton/CollectionButton";
import { useReliseById } from "../../hooks/useReliseById";
import { Loader } from "../Loader/Loader";
import PropTypes from "prop-types";
import { GENRE_COLORS_BY_GENRE_ID } from "../../constants/genres";

function ModalVinyl({
  id,
  inCollection,
  inFavorites,
  onFavoritesToggle,
  onCollectionToggle,
  onClose,
  variant,
}) {
  const { data: dataRelise } = useReliseById(id);
  const {
    title,
    artist,
    year,
    country,
    thumb_image,
    cover_image,
    tracklist: trackList,
    styles: releaseStyles,
  } = dataRelise || {};

  const [isPlay, setIsPlay] = useState(false);
  const { data: countries } = useCountryListAsync();
  function getCountryName(countryId) {
    if (!Array.isArray(countries)) return "";
    return countries.find((c) => c.id === countryId)?.title;
  }

  const controlsVinyl = useAnimation();
  const controlsCover = useAnimation();

  if (!dataRelise) {
    return <Loader />;
  }

  const color =
    GENRE_COLORS_BY_GENRE_ID[Math.floor(Math.random() * 13) + 1]
      .linearGradientValue;

  const animateVinylEnable = async () => {
    if (!isPlay) setIsPlay((prevIsPlay) => !prevIsPlay);
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
      x: 180,
    });
    await controlsVinyl.start({
      rotate: 360,
      transition: { delay: 0.2, duration: 5, repeat: Infinity, ease: "linear" },
    });
  };

  const animateVinylDisable = async () => {
    if (isPlay) setIsPlay((prevIsPlay) => !prevIsPlay);
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

  const animateCoverEnable = async () => {
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
  const animateCoverDisable = async () => {
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
  const handlePlay = () => {
    isPlay ? animateVinylDisable() : animateVinylEnable();
    isPlay ? animateCoverDisable() : animateCoverEnable();
  };
  return (
    <>
      <div
        className={clsx(
          styles.modal,
          variant === "primary" ? styles.primary : styles.secondary
        )}
      >
        <div className={styles.modalContent}>
          <div className={styles.wrapperTitle}>
            <h1 className={styles.title}>
              <Link to={`/vinyls/${id}`}>{title}</Link>
            </h1>
            <div
              className={styles.wrapperClose}
              style={{ transform: "scale(1.2)" }}
            >
              <div
                className={styles.close}
                role="button"
                tabIndex={0}
                onClick={onClose}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
          <h2 className={styles.artist}>
            <Link to={`/results?artist=${artist}`}>{artist}</Link>
          </h2>

          <div className={styles.avatar}>
            <div className={styles.images}>
              <motion.img
                animate={controlsCover}
                className={styles.img}
                src={cover_image}
                alt={title}
              />
            </div>
            <motion.div animate={controlsVinyl} className={styles.vinyl}>
              <div
                className={styles.vinylImg}
                style={{ background: color, opacity: 1 }}
              >
                <img
                  className={styles.vinylImgFile}
                  src="/content/image.png"
                  alt="vinyl"
                  style={{ opacity: 0.2 }}
                ></img>
              </div>
              <div className={styles.vinylCoverImg}>
                <img src={thumb_image} alt=""></img>
              </div>
            </motion.div>
            <FavoriteButton
              isFill={inFavorites}
              onClick={() => onFavoritesToggle(id)}
            />
            <PlayButton isFill={isPlay} onClick={handlePlay}></PlayButton>
          </div>
          <div className={styles.info}>
            <div className={styles.wrapper}>
              <div className={styles.text}>Year released :</div>
              <div className={styles.value}>{year}</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.text}>Style :</div>
              <div className={styles.value}>
                {releaseStyles?.map((style, index) => (
                  <div className={styles.styleRelease} key={style}>
                    {style}
                    {index !== releaseStyles.length - 1 && (
                      <span className={styles.text}>, </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.text}>Country :</div>
              <div className={styles.value}>{getCountryName(country)}</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.text}>Format: </div>
              <div className={styles.value}>2 x Vinyl, LP, Album</div>
            </div>
          </div>
          <h3 className={styles.title}>Where to buy</h3>
          <div className={styles.wrapperShop}>
            <div className={styles.shop}>
              <div className={styles.shopImg}>
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                ></img>
              </div>
              <div className={styles.shopLink}>
                <Link to="/">Vinyla 1500 uah</Link>
              </div>
            </div>
            <div className={styles.shop}>
              <div className={styles.shopImg}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                ></img>
              </div>
              <div className={styles.shopLink}>
                <Link to="/">Playsound 1250 uah</Link>
              </div>
            </div>
          </div>
          <h3 className={styles.title}>Track list</h3>
          <ul className={styles.list}>
            {trackList?.map((track, index) => (
              <li className={styles.track} key={index}>
                <div className={styles.left}>
                  <div className={clsx(styles.position, styles.text)}>
                    {track.position}
                  </div>
                  <div className={styles.value}>{track.title}</div>
                </div>
                <div className={styles.text}>{track.duration}</div>
              </li>
            ))}
          </ul>
          <div
            className={clsx(
              styles.notes,
              variant === "primary"
                ? styles.notesPrimary
                : styles.notesSecondary
            )}
          >
            <div className={styles.title}>
              <div className={styles.textNotes}>Add a note</div>
              <div className={styles.icon}>ICON</div>
            </div>
            <div className={styles.placeholder}>
              You can write here whatever you want..
              <span
                style={{
                  color: "var(--error)",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: 15,
                }}
              >
                TODO: implement this block
              </span>
            </div>
          </div>
        </div>
        {variant === "primary" ? (
          <div className={styles.footer}>
            <div className={styles.footerContainer}>
              <CollectionButton
                className={styles.root}
                isActive={inCollection}
                onClick={() => onCollectionToggle(id)}
              />
            </div>
          </div>
        ) : variant === "secondary" ? (
          <div className={styles.buttonWrapper}>
            <div className={styles.button}>
              <CollectionButton
                isActive={inCollection}
                onClick={() => onCollectionToggle(id)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

ModalVinyl.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  inCollection: PropTypes.bool.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  onFavoritesToggle: PropTypes.func.isRequired,
  onCollectionToggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
};

export default ModalVinyl;
