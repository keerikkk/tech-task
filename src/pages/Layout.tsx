import { Outlet, useNavigate } from "react-router";
import NavBar from "../components/BottomNavBar";
import { useAuth } from "../components/AuthProvider";
import AuthForm from "../components/AuthForm";
import { Container } from "@mui/material";
import { useEffect } from "react";

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
          <Outlet />
          <NavBar />
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
