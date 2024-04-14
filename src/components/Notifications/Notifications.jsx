import PropTypes from "prop-types";
import styles from "./Notifications.module.css";
import { motion } from "framer-motion";

export function Notifications({ notifications = [] }) {
  return (
    <div className={styles.root}>
      {notifications.map((notification) => (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.1,
            transition: { duration: 0.33 },
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.33 },
          }}
          exit={{ opacity: 0, scale: 0.1, transition: { duration: 0.33 } }}
          className={styles.notification}
          key={notification.id}
        >
          {notification.message}
        </motion.div>
      ))}
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};
