import { createContext } from "react";
import { useNotifications } from "../../../hooks/useNotifications.js";
import PropTypes from "prop-types";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [addNotification, notifications] = useNotifications();

  return (
    <NotificationsContext.Provider value={{ addNotification, notifications }}>
      {children}
    </NotificationsContext.Provider>
  );
};

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
