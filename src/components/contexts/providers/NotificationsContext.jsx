import { createContext, useMemo } from "react";
import { useNotifications } from "../../../hooks/useNotifications";
import PropTypes from "prop-types";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [addNotification, notifications] = useNotifications();

  const memoizedValue = useMemo(
    () => ({ addNotification, notifications }),
    [addNotification, notifications]
  );

  return (
    <NotificationsContext.Provider value={memoizedValue}>
      {children}
    </NotificationsContext.Provider>
  );
};

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
