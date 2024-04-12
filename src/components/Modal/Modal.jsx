import PropTypes from "prop-types";
import styles from "./Modal.module.css";

function Modal({ onClose, children }) {
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={styles.overlay}
        onClick={onClose}
      ></div>
      <div className={styles.modal}>{children}</div>
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
