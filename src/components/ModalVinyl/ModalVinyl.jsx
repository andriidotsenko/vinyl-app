/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./ModalVinyl.module.css";
import { useVinylById } from "../../hooks/useVinylById";
import { useCountryListAsync } from "../../hooks/useCountryListAsync";
import usePlayDialog from "../../hooks/usePlayDialog";
import TrackList from "./TrackList/TrackList.jsx";
import ShopItem from "./ShopItem/ShopItem.jsx";
import VinylInfo from "./VinylInfo/VinylInfo.jsx";
import {
  playAudio,
  pauseAudio,
  playOpenSound,
  pauseOpenSound,
} from "../../utils/audioUtils.js";
import { CloseIcon } from "../Icon/CloseIcon";
import PlayButton from "./PlayButton/PlayButton.jsx";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CollectionButton from "../CollectionButton/CollectionButton";
import { Loader } from "../Loader/Loader";
import { VinylNote } from "./VinylNote/VinylNote.jsx";
import { GENRE_COLORS_BY_GENRE_ID } from "../../constants/genres";
import {
  animateVinylEnable,
  animateVinylDisable,
  animateCoverEnable,
  animateCoverDisable,
} from "../../utils/animations";
import useKeyDown from "../../hooks/useKeyDown";

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
  useKeyDown(onClose, ["Escape", "Esc"]);
  const handleAnimateVinylEnable = async () => {
    if (!isPlay) setIsPlay((prevIsPlay) => !prevIsPlay);

    await animateVinylEnable(
      controlsVinyl,
      () => playAudio(trackRef),
      () => pauseAudio(trackRef),
      () => playOpenSound(actionSoundRef),
      () => pauseOpenSound(actionSoundRef)
    );
  };
  const handleAnimateVinylDisable = async () => {
    if (isPlay) setIsPlay((prevIsPlay) => !prevIsPlay);

    await animateVinylDisable(
      controlsVinyl,
      () => pauseAudio(trackRef),
      () => playAudio(trackRef),
      () => playOpenSound(actionSoundRef),
      () => pauseOpenSound(actionSoundRef)
    );
  };
  const defaultAudio = "/content/noizVinyl.mp3";
  if (loadingVinyl) {
    return <Loader />;
  }

  const audio = defaultAudio;
  const color =
    GENRE_COLORS_BY_GENRE_ID[Math.floor(Math.random() * 13) + 1]
      .linearGradientValue;

  return (
    <>
      <motion.div
        initial={{
          opacity: 0.5,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
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
            <PlayButton onClick={handlePlay} isFill={isPlay} />
            <audio ref={trackRef}>
              <source src={audio} type="audio/mpeg" />
            </audio>
            <audio ref={actionSoundRef}>
              <source src="/content/open.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <VinylInfo
            year={year}
            releaseStyles={releaseStyles}
            country={country}
            getCountryName={getCountryName}
          />
          <h3 className={styles.title}>Where to buy</h3>
          <div className={styles.wrapperShop}>
            <ShopItem
              imageSrc="/content/playvinyl.png"
              linkUrl="/"
              name="Vinyla"
              price={1500}
            />
            <ShopItem
              imageSrc="/content/vinyla.jpg"
              linkUrl="/"
              name="Playsound"
              price={1250}
            />
          </div>
          <h3 className={styles.title}>Track list</h3>
          <TrackList trackList={trackList} />
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
      </motion.div>
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
