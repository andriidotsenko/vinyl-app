/* eslint-disable jsx-a11y/media-has-caption */
import { memo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./ModalVinyl.module.css";

import { useVinylById } from "../../hooks/useVinylById";
import { useCountryListAsync } from "../../hooks/useCountryListAsync";
import usePlayEnd from "../../hooks/usePlayEnd.js";
import useKeyDown from "../../hooks/useKeyDown";

import TrackList from "./TrackList/TrackList.jsx";
import ShopItem from "./ShopItem/ShopItem.jsx";
import VinylInfo from "./VinylInfo/VinylInfo.jsx";
import { CloseIcon } from "../Icon/CloseIcon";
import PlayButton from "./PlayButton/PlayButton.jsx";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CollectionButton from "../CollectionButton/CollectionButton";
import { VinylNote } from "./VinylNote/VinylNote.jsx";
import { Loader } from "../Loader/Loader";

import defaultAudio from "../../assets/content/noizVinyl.mp3";
import actionSound from "../../assets/content/open.mp3";
import imageVinyl from "../../assets/content/image.png";
import playvinyl from "../../assets/content/playvinyl.png";
import vinyla from "../../assets/content/vinyla.jpg";

import { GENRE_COLORS_BY_GENRE_ID } from "../../constants/genres";

import {
  playAudio,
  pauseAudio,
  playOpenSound,
  pauseOpenSound,
} from "../../utils/audioUtils.js";
import {
  animateVinylEnable,
  animateVinylDisable,
  animateCoverEnable,
  animateCoverDisable,
} from "../../utils/animations";
import { WithTooltip } from "../WithTooltip/WithTooltip.jsx";

function ModalVinyl({
  id,
  inCollection,
  inFavorites,
  onFavoritesToggle,
  onCollectionToggle,
  onClose,
  variant,
  noteList,
  changeNote,
}) {
  const { data: dataVinyl, isLoading: loadingVinyl } = useVinylById(id);
  const {
    title,
    artist,
    year,
    country,
    thumb_image,
    cover_image,
    tracklist,
    styles: releaseStyles,
  } = dataVinyl || {};

  const [isPlayEnded, setonPlayEnd] = useState(false);

  const { data: countries } = useCountryListAsync() || [];

  function getCountryName(countryId) {
    if (!Array.isArray(countries)) return "";
    return countries.find((c) => c.id === countryId)?.title;
  }

  const controlsVinyl = useAnimation();
  const controlsCover = useAnimation();
  const trackRef = useRef(null);
  const actionSoundRef = useRef(null);

  const audio = defaultAudio;

  const color =
    GENRE_COLORS_BY_GENRE_ID[Math.floor(Math.random() * 13) + 1]
      .linearGradientValue;

  const handleAnimateVinylEnable = async () => {
    if (!isPlayEnded) setonPlayEnd((prevIsPlayEnded) => !prevIsPlayEnded);

    await animateVinylEnable(
      controlsVinyl,
      () => playAudio(trackRef),
      () => pauseAudio(trackRef),
      () => playOpenSound(actionSoundRef),
      () => pauseOpenSound(actionSoundRef)
    );
  };

  const handleAnimateVinylDisable = async () => {
    if (isPlayEnded) setonPlayEnd((prevIsPlayEnded) => !prevIsPlayEnded);
    await animateVinylDisable(
      controlsVinyl,
      () => pauseAudio(trackRef),
      () => playAudio(trackRef),
      () => playOpenSound(actionSoundRef),
      () => pauseOpenSound(actionSoundRef)
    );
  };
  const handlePlay = () => {
    isPlayEnded ? handleAnimateVinylDisable() : handleAnimateVinylEnable();
    isPlayEnded
      ? animateCoverDisable(controlsCover)
      : animateCoverEnable(controlsCover);
  };

  usePlayEnd(isPlayEnded, handlePlay);

  useKeyDown(handlePlay, ["Space", "Play"]);
  useKeyDown(onClose, ["Escape", "Esc"]);

  if (loadingVinyl) {
    return <Loader />;
  }
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
                  src={imageVinyl}
                  alt="vinyl"
                  style={{ opacity: 0.8 }}
                ></img>
              </div>
              <div className={styles.vinylCoverImg}>
                <img src={thumb_image} alt="" />
              </div>
            </motion.div>
            <div className={styles.favoriteButtonWrapper}>
              <WithTooltip
                text={`${
                  inFavorites ? "Remove from favorites" : "Add to favorites"
                } ${title} - ${artist}`}
              >
                <FavoriteButton
                  isFill={inFavorites}
                  onClick={() => onFavoritesToggle(dataVinyl)}
                />
              </WithTooltip>
            </div>

            <div className={styles.playButtonWrapper}>
              <WithTooltip text={isPlayEnded ? "Pause" : "Play"}>
                <PlayButton onClick={handlePlay} isFill={isPlayEnded} />
              </WithTooltip>
            </div>
            <audio ref={trackRef}>
              <source src={audio} type="audio/mpeg" />
            </audio>
            <audio ref={actionSoundRef}>
              <source src={actionSound} type="audio/mpeg" />
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
              imageSrc={playvinyl}
              linkUrl="/"
              name="Vinyla"
              price={1500}
            />
            <ShopItem
              imageSrc={vinyla}
              linkUrl="/"
              name="Playsound"
              price={1250}
            />
          </div>
          <h3 className={styles.title}>Track list</h3>
          <TrackList trackList={tracklist} />
          {inCollection && (
            <VinylNote
              variant={variant}
              id={id}
              title={title}
              artist={artist}
              changeNote={changeNote}
              noteList={noteList}
            />
          )}
        </div>
        {variant === "primary" ? (
          <div className={styles.footer}>
            <div className={styles.footerContainer}>
              <div className={styles.root}>
                <WithTooltip
                  text={`${
                    inCollection
                      ? "Remove from collection"
                      : "Add to collection"
                  } ${title} - ${artist}`}
                >
                  <div className={styles.root}>
                    <CollectionButton
                      isActive={inCollection}
                      onClick={() =>
                        onCollectionToggle(dataVinyl, inCollection)
                      }
                    />
                  </div>
                </WithTooltip>
              </div>
            </div>
          </div>
        ) : variant === "secondary" ? (
          <div className={styles.buttonWrapper}>
            <div className={styles.button}>
              <WithTooltip
                text={`${
                  inCollection ? "Remove from collection" : "Add to collection"
                } ${title} - ${artist}`}
              >
                <div className={styles.root}>
                  <CollectionButton
                    isActive={inCollection}
                    onClick={() => onCollectionToggle(dataVinyl)}
                  />
                </div>
              </WithTooltip>
            </div>
          </div>
        ) : null}
      </motion.div>
    </>
  );
}

ModalVinyl.propTypes = {
  id: PropTypes.number.isRequired,
  inCollection: PropTypes.bool.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  onFavoritesToggle: PropTypes.func.isRequired,
  onCollectionToggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  changeNote: PropTypes.func.isRequired,
  noteList: PropTypes.object.isRequired,
};

const MemoizedModalVinyl = memo(ModalVinyl);
export default MemoizedModalVinyl;
