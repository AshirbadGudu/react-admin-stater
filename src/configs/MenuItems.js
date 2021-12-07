import {
  Dashboard,
  LocalOffer,
  ManageAccounts,
  NotificationsRounded,
  People,
  Quiz,
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
    key: "6",
    title: "Categories",
    icon: <LocalOffer />,
    route: "/categories",
  },
  {
    key: "7",
    title: "Manage FAQs",
    icon: <Quiz />,
    route: "/manage-faqs",
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
