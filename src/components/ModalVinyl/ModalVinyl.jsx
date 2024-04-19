/* eslint-disable jsx-a11y/media-has-caption */
import clsx from "clsx";
import styles from "./ModalVinyl.module.css";
import { Link } from "react-router-dom";
import PlayButton from "./PlayButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useCountryListAsync } from "../../hooks/useCountryListAsync";
import { useRef, useState } from "react";
import { CloseIcon } from "../Icon/CloseIcon";
import { motion, useAnimation } from "framer-motion";
import CollectionButton from "../CollectionButton/CollectionButton";
import { useVinylById } from "../../hooks/useVinylById";
import { Loader } from "../Loader/Loader";
import PropTypes from "prop-types";
import { GENRE_COLORS_BY_GENRE_ID } from "../../constants/genres";
import {
  animateVinylEnable,
  animateVinylDisable,
  animateCoverEnable,
  animateCoverDisable,
} from "../../utils/animations";
import { VinylNote } from "./VinylNote";
import { useDeezerSearch } from "../../hooks/useDeezerSearch";
import usePlayDialog from "../../hooks/usePlayDialog";

function ModalVinyl({
  id,
  inCollection,
  inFavorites,
  onFavoritesToggle,
  onCollectionToggle,
  onClose,
  variant,
  noteList,
  addNote,
}) {
  const { data: dataVinyl, isLoading: loadingVinyl } = useVinylById(id);
  const {
    title,
    artist,
    year,
    country,
    thumb_image,
    cover_image,
    tracklist: trackList,
    styles: releaseStyles,
  } = dataVinyl || {};

  const [isPlay, setIsPlay] = useState(false);
  const { data: countries } = useCountryListAsync();
  function getCountryName(countryId) {
    if (!Array.isArray(countries)) return "";
    return countries.find((c) => c.id === countryId)?.title;
  }

  const controlsVinyl = useAnimation();
  const controlsCover = useAnimation();

  const trackRef = useRef(null);
  const actionSoundRef = useRef(null);

  const handlePlay = () => {
    isPlay ? handleAnimateVinylDisable() : handleAnimateVinylEnable();
    isPlay
      ? animateCoverDisable(controlsCover)
      : animateCoverEnable(controlsCover);
  };

  usePlayDialog(isPlay, handlePlay);

  const { data: deezerData, isLoading: deezerLoading } = useDeezerSearch(
    trackList[0].title
  );

  const deezerQuery = deezerData?.find((item) => {
    return item.artist.name === artist;
  });

  const defaultAudio = "/content/audio.mp3";

  const audioDeezer = deezerQuery ? deezerQuery.preview : null;
  const audio = audioDeezer || defaultAudio;

  const VOLUME_TRACK = 0.1;
  const VOLUME_ACTION = 0.01;
  const playAudio = async () => {
    trackRef.current.load();
    trackRef.current.volume = VOLUME_TRACK;
    trackRef.current.play();
  };

  const pauseAudio = async () => {
    trackRef.current.pause();

    trackRef.current.currentTime = 0;
  };

  const playOpenSound = async () => {
    actionSoundRef.current.load();
    actionSoundRef.current.volume = VOLUME_ACTION;
    actionSoundRef.current.play();
  };

  const pauseOpenSound = async () => {
    actionSoundRef.current.pause();
    actionSoundRef.current.currentTime = 0;
  };

  if (loadingVinyl || deezerLoading) {
    return <Loader />;
  }

  const color =
    GENRE_COLORS_BY_GENRE_ID[Math.floor(Math.random() * 13) + 1]
      .linearGradientValue;

  const handleAnimateVinylEnable = async () => {
    if (!isPlay) setIsPlay((prevIsPlay) => !prevIsPlay);

    await animateVinylEnable(
      controlsVinyl,
      playAudio,
      pauseAudio,
      playOpenSound,
      pauseOpenSound
    );
  };

  const handleAnimateVinylDisable = async () => {
    if (isPlay) setIsPlay((prevIsPlay) => !prevIsPlay);

    await animateVinylDisable(
      controlsVinyl,
      pauseAudio,
      playAudio,
      playOpenSound,
      pauseOpenSound
    );
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
                  style={{ opacity: 0.8 }}
                ></img>
              </div>
              <div className={styles.vinylCoverImg}>
                <img src={thumb_image} alt=""></img>
              </div>
            </motion.div>
            <FavoriteButton
              isFill={inFavorites}
              onClick={() => onFavoritesToggle(dataVinyl)}
            />
            <PlayButton isFill={isPlay} onClick={handlePlay}></PlayButton>
            <audio ref={trackRef}>
              <source src={audio} type="audio/mpeg" />
            </audio>
            <audio ref={actionSoundRef}>
              <source src="/content/open.mp3" type="audio/mpeg" />
            </audio>
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
                <img src="/content/playvinyl.png" alt=""></img>
              </div>
              <div className={styles.shopLink}>
                <Link to="/">Vinyla 1500 uah</Link>
              </div>
            </div>
            <div className={styles.shop}>
              <div className={styles.shopImg}>
                <img src="/content/vinyla.jpg" alt=""></img>
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
          <VinylNote
            variant={variant}
            id={id}
            title={title}
            artist={artist}
            addNote={addNote}
            noteList={noteList}
          />
        </div>
        {variant === "primary" ? (
          <div className={styles.footer}>
            <div className={styles.footerContainer}>
              <CollectionButton
                className={styles.root}
                isActive={inCollection}
                onClick={() => onCollectionToggle(dataVinyl)}
              />
            </div>
          </div>
        ) : variant === "secondary" ? (
          <div className={styles.buttonWrapper}>
            <div className={styles.button}>
              <CollectionButton
                isActive={inCollection}
                onClick={() => onCollectionToggle(dataVinyl)}
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
  coverUrl: PropTypes.string.isRequired,
  inCollection: PropTypes.bool.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  onFavoritesToggle: PropTypes.func.isRequired,
  onCollectionToggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  addNote: PropTypes.func.isRequired,
  noteList: PropTypes.object.isRequired,
};

export default ModalVinyl;
