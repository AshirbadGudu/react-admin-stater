import { Dashboard, LockRounded } from "@mui/icons-material";

const MenuItems = [
  {
    key: "1",
    title: "Dashboard",
    icon: <Dashboard />,
    route: "/",
  },
  {
    key: "2",
    title: "Change Password",
    icon: <LockRounded />,
    route: "/change-password",
  },
];

export default MenuItems;
