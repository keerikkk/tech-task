import { Outlet, useNavigate } from "react-router";
import BottomNavBar from "../components/BottomNavBar";
import { useAuth } from "../components/AuthProvider";
import AuthForm from "../components/AuthForm";
import { Container } from "@mui/material";
import { useEffect } from "react";
import NavBar from "../components/NavBar";

const Layout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/transactions");
    }
  }, [user, navigate]);

  return (
    <>
      {user ? (
        <>
          <NavBar />
          <Outlet />
          <BottomNavBar />
        </>
      ) : (
        <Container sx={{ width: "100vw" }}>
          <AuthForm />
          <Outlet />
        </Container>
      )}
    </>
  );
};

export default Layout;
