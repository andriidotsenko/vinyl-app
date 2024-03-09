import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./CollectionButton.module.css";

import CollectionIcon from "../icons/CollectionIcon/CollectionIcon";
import AddIcon from "../icons/AddIcon/AddIcon";

function CollectionButton({ inCollection, onClick, className }) {
  return (
    <Button
      className={className}
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
  className: PropTypes.string,
};

export default CollectionButton;
