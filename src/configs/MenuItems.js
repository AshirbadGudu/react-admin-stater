import {
  Dashboard,
  ManageAccounts,
  NotificationsRounded,
  People,
  ShoppingBasket,
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
    key: "5",
    title: "Products",
    icon: <ShoppingBasket />,
    route: "/products",
  },
  {
    key: "3",
    title: "Notifications",
    icon: <NotificationsRounded />,
    route: "/notifications",
  },
  {
    key: "2",
    title: "Account Settings",
    icon: <ManageAccounts />,
    route: "/account-settings",
  },
];

export default MenuItems;
