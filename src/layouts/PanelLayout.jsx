import { Fragment, useState } from "react";
import {
  Toolbar,
  Box,
  List,
  CssBaseline,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
  Tooltip,
  Divider,
  Drawer,
  AppBar,
} from "@mui/material";
import {
  ExitToApp,
  ChevronLeft,
  ChevronRight,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { MenuItems } from "configs";
import { Link } from "react-router-dom";
// Define drawer width
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  color: "#662992 ",
  background: "#fff",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  "&:hover": {},
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  // color: "black",
  // background: "#ffbf31",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

// Create CustomDrawerHeader
const CustomDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "#662992 ",
  color: "#fff",
  boxShadow: "3px 3px 10px #1b00ff1f",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  fontFamily: "poppins",

  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const PanelLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomAppBar position="fixed" color="transparent" open={isDrawerOpen}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(isDrawerOpen && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ textTransform: "capitalize" }}
            >
              Admin Panel
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </CustomAppBar>
        <CustomDrawer variant="permanent" open={isDrawerOpen}>
          <CustomDrawerHeader>
            <div className="layoutLogo">
              {/* <img src={Logo} alt="" width="170px" className="layoutLogo" /> */}
              <Typography variant="h6" noWrap>
                Admin Panel
              </Typography>
            </div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </CustomDrawerHeader>
          <Divider />
          {/* Render Menu Items */}
          <List sx={{ marginTop: "1px" }}>
            {MenuItems.map((item) => (
              <Fragment key={item.key}>
                <Tooltip
                  title={item.title}
                  followCursor
                  component={Link}
                  to={item.route}
                >
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </Tooltip>
                <Divider />
              </Fragment>
            ))}
            <Tooltip title={"Click Here To Logout"} followCursor>
              <ListItem button>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Tooltip>
          </List>
        </CustomDrawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <CustomDrawerHeader />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default PanelLayout;
