import { useEffect, useRef, useState } from "react";
import { Portal } from "react-portal";
import styles from "./WithTooltip.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export function WithTooltip({ children, tooltipText = "tooltipText" }) {
  const elementRef = useRef(null);
  const [position, setPosition] = useState(null);

  const handlePointerEnter = () => {
    const { top, left, width } = elementRef.current.getBoundingClientRect();

    setPosition({
      top: top - 6,
      left: left + width / 2,
    });
  };

  const handlePointerLeave = () => {
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setPosition(null);
      }, 30)
    );
  };
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);
  return (
    <>
      <div
        className={styles.withTooltip}
        ref={elementRef}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        {children}
      </div>
      {position && (
        <Portal>
          <motion.div
            className={styles.tooltip}
            style={position}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {tooltipText}
          </motion.div>
        </Portal>
      )}
    </>
  );
}

WithTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltipText: PropTypes.string,
};
