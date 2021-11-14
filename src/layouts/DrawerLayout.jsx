import { Fragment } from "react";
import {
  Box,
  List,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Tooltip,
  Divider,
  Button,
  ListItemButton,
} from "@mui/material";
import { ExitToApp, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { MenuItems } from "configs";
import { useAppContext } from "contexts";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CustomDrawer, CustomDrawerHeader } from "./custom";

const DrawerLayout = ({ isDrawerOpen, handleDrawerClose }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const handleLogout = async () => {
    try {
      setUser({});
      navigate("/", {});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CustomDrawer variant="permanent" open={isDrawerOpen}>
        <CustomDrawerHeader>
          <div className="layoutLogo">
            {/* <img src={Logo} alt="" width="170px" className="layoutLogo" /> */}
            <Typography variant="h6" noWrap>
              ADMIN PANEL
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
                arrow
                placement="top-end"
              >
                <ListItemButton
                  component={Link}
                  to={item.route}
                  selected={location.pathname === item.route}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </Tooltip>
              <Divider />
            </Fragment>
          ))}
          <Box hidden={isDrawerOpen}>
            <Tooltip
              title={"Click Here To Logout"}
              followCursor
              arrow
              placement="top-end"
            >
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItemButton>
            </Tooltip>
          </Box>
        </List>
        <Box
          hidden={!isDrawerOpen}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography>Hi User,</Typography>
          <Typography variant="caption">
            Click here to logout from panel
          </Typography>
          <div className="">
            <Button
              variant="contained"
              onClick={handleLogout}
              startIcon={<ExitToApp />}
              color="error"
              className="mt-1vh"
            >
              Logout
            </Button>
          </div>
        </Box>
      </CustomDrawer>
    </>
  );
};

export default DrawerLayout;
