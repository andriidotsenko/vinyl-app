import { useState } from "react";

let lastId = 0;

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  function addNotification(message) {
    const id = lastId++;
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, message },
    ]);
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id)
      );
    }, 2000);
  }

  return [addNotification, notifications];
}
