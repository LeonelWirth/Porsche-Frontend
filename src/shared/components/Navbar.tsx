import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import PorscheIcon from "../assets/Porsche.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{
        width: "100vw",
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: "white",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Box
          component="img"
          sx={{ height: 40, width: "auto", borderRadius: "50%" }}
          alt="Porsche Logo"
          src={PorscheIcon}
        />
        <Typography
          component={Link}
          to="/"
          variant="h6"
          color="inherit"
          sx={{ textDecoration: "none", flexGrow: 1 }}
        >
          Porch Gardening
        </Typography>
        <Box />
      </Toolbar>
    </AppBar>
  );
};
