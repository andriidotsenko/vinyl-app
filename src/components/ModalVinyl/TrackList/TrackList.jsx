import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./TrackList.module.css";
import { memo } from "react";

const TrackList = memo(({ trackList }) => {
  return (
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
  );
});

TrackList.propTypes = {
  trackList: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};

TrackList.displayName = "TrackList"; // Adding display name

export default TrackList;
