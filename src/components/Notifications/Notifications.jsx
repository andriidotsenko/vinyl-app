import PropTypes from "prop-types";
import styles from "./Notifications.module.css";

export function Notifications({ notifications = [] }) {
  return (
    <div className={styles.root}>
      {notifications.map((notification) => (
        <div className={styles.notification} key={notification.id}>
          {notification.message}
        </div>
      ))}
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};
