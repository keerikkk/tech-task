import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;