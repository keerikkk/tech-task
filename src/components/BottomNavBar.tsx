import * as React from "react";
import { useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { navItems } from "../data/navigationLinks";
import { useAuth } from "./AuthProvider";

const drawerWidth = 240;

export default function DrawerAppBar() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }} component="nav">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "block",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.title}
                sx={{ color: "#fff" }}
                onClick={() => navigate(item.path)}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
