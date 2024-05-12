import PropTypes from "prop-types";
import styles from "./Notifications.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { NotificationsContext } from "../../NotificationsContext";

export function Notifications() {
  const { notifications } = useContext(NotificationsContext);
  return (
    <div className={styles.root}>
      <AnimatePresence>
        {notifications.reverse().map((notification) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.1,
              x: "200%",
              transition: { duration: 0.33 },
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.33 },
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
              transition: { duration: 0.22 },
            }}
            className={styles.notification}
            key={notification.id}
          >
            {notification.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};
