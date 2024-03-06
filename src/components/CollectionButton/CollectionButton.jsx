import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./CollectionButton.module.css";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import AddIcon from "../AddIcon/AddIcon";

function CollectionButton({ inCollection, onClick }) {
  return (
    <button
      className={clsx(
        "btn",
        inCollection ? styles.btnCollection : styles.btnAdd
      )}
      onClick={onClick}
    >
      {inCollection ? <DeleteIcon /> : <AddIcon />}{" "}
    </button>
  );
}

CollectionButton.propTypes = {
  inCollection: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CollectionButton;
