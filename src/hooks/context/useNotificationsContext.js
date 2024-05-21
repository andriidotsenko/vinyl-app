import { useContext } from "react";
import { NotificationsContext } from "../../components/contexts/providers/NotificationsContext";

export function useNotificationsContext() {
  return useContext(NotificationsContext);
}
