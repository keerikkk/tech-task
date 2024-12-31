import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { useAuth } from "../components/AuthProvider";
import AuthForm from "../components/AuthForm";
import { Container } from "@mui/material";

const Layout = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <NavBar />
          <main>
            <Outlet />
          </main>
          <footer>footer</footer>
        </>
      ) : (
        <Container sx={{ width: "100vw" }}>
          <AuthForm />
        </Container>
      )}
    </>
  );
};

export default Layout;
