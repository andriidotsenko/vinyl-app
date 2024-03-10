import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./CollectionButton.module.css";

import CollectionIcon from "../Icon/CollectionIcon";
import AddIcon from "../Icon/AddIcon";

function CollectionButton({ inCollection, onClick }) {
  return (
    <Button
      className={styles.root}
      unpressedValue={
        <>
          <span className={styles.span}>Add</span>
          <AddIcon />
        </>
      }
      pressedValue={
        <>
          <span className={styles.span}>In collection </span>
          <CollectionIcon />
        </>
      }
      isPressed={inCollection}
      onClick={onClick}
    />
  );
}

CollectionButton.propTypes = {
  inCollection: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CollectionButton;
