import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
import { Link } from "react-router-dom";

const LessonAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <Typography variant="h6" component="div" sx={{ cursor: "pointer" }}>
            Home
          </Typography>
        </Link>

        <Stack direction="row" sx={{ marginLeft: "auto" }}>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            Products
          </Button>
          <Button sx={{ color: "white" }}>Prices</Button>
          <Button sx={{ color: "white" }}>About</Button>
          <Button sx={{ color: "white" }}>Contact</Button>
        </Stack>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Books</MenuItem>
          <MenuItem onClick={handleClose}>Notebooks</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default LessonAppBar;
