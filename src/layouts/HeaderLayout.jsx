import {
  Toolbar,
  Box,
  CssBaseline,
  Typography,
  IconButton,
  Badge,
  Chip,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Logout,
  Menu as MenuIcon,
  Notifications,
  Settings,
} from "@mui/icons-material";
import { CustomAppBar } from "./custom";
import { useState } from "react";

const HeaderLayout = ({ handleDrawerOpen, isDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <CustomAppBar position="fixed" open={isDrawerOpen}>
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
            {"Admin Panel"}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{ mr: 2 }}>
            <Badge badgeContent={4} color="error">
              <Notifications color="primary" />
            </Badge>
          </IconButton>
          <Chip
            onClick={handleClick}
            avatar={<Avatar alt="" src="/logo192.png" />}
            label="Profile"
            variant="outlined"
          />
        </Toolbar>
      </CustomAppBar>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar alt="" src="/logo192.png" />
          <ListItemText
            primary="User Name"
            secondary={"admin@muireactadmin.com"}
          />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderLayout;
