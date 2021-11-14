import {
  Toolbar,
  Box,
  CssBaseline,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { CustomAppBar } from "./custom";

const HeaderLayout = ({ handleDrawerOpen, isDrawerOpen }) => {
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
        </Toolbar>
      </CustomAppBar>
    </>
  );
};

export default HeaderLayout;
