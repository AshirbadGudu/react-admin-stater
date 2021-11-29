import {
  Dashboard,
  LockRounded,
  NotificationsRounded,
  People,
} from "@mui/icons-material";

const MenuItems = [
  {
    key: "1",
    title: "Dashboard",
    icon: <Dashboard />,
    route: "/",
  },
  {
    key: "4",
    title: "Users",
    icon: <People />,
    route: "/users",
  },
  {
    key: "3",
    title: "Notifications",
    icon: <NotificationsRounded />,
    route: "/notifications",
  },
  {
    key: "2",
    title: "Change Password",
    icon: <LockRounded />,
    route: "/change-password",
  },
];

export default MenuItems;
