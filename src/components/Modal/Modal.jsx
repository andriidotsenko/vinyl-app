import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { motion } from "framer-motion";

function Modal({ onClose, children }) {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        role="button"
        tabIndex={0}
        className={styles.overlay}
        onClick={onClose}
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.1,
          translateX: "-50%",
          translateY: "-50%",
          // transition: { duration: 0.33 },
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateX: "-50%",
          translateY: "-50%",

          // transition: { duration: 0.33 },
        }}
        exit={{
          opacity: 0,
          scale: 0.1,
          translateX: "-50%",
          translateY: "-50%",
          // transition: { duration: 0.33 },
        }}
        className={styles.modal}
      >
        {children}
      </motion.div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
