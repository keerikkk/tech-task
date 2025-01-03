import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import { useLocation } from "react-router";
import { navItems } from "../data/navigationLinks";
import { useAuth } from "./AuthProvider";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: 0,
  paddingBottom: theme.spacing(2),
  display: "grid",
  gridTemplateColumns: "1fr 3fr 1fr",
  gap: theme.spacing(2),
}));

export default function NavBar() {
  const { handleLogout } = useAuth();
  const theme = useTheme();
  const location = useLocation();

  const currentPage = navItems.find((item) => item.path === location.pathname);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <StyledToolbar>
          <Button
            variant="contained"
            sx={{
              justifySelf: "center",
              marginTop: theme.spacing(1),
            }}
            onClick={handleLogout}
          >
            Закрити
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: theme.palette.common.black,
              backgroundColor: theme.palette.primary.light,
            }}
          >
            {currentPage ? currentPage.title : "Unknown page"}
          </Box>
          <IconButton
            size="small"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            sx={{
              width: "2rem",
              height: "2rem",
              justifySelf: "center",
              border: "1px solid #fff",
              marginTop: theme.spacing(1),
              borderRadius: "50%",
              "&:hover": {
                border: "1px solid rgba(255,255,255,0.5)",
              },
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
