import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "white",
          transition: "background-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            backgroundColor: "lightgray",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          },
        }}
        elevation={0.5}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontWeight: 600,
              fontSize: "1.2rem",
              "&:hover": {
                color: "blue", // Change the color on hover
              },
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              APP LOGO
            </Link>
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "black",
                "&:hover": {
                  backgroundColor: "lightgray", // Change the background on hover
                },
              }}
            >
              DASHBOARD
            </Button>
          </Link>
          <Link to="/createads" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "black",
                "&:hover": {
                  backgroundColor: "lightgray", // Change the background on hover
                },
              }}
            >
              CREATE ADS
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
