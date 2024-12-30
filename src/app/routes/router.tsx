import { createBrowserRouter } from "react-router";
import App from "../../App";
import Layout from "../../pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/transactions",
        element: <div>Transactions</div>,
      },
      {
        path: "/currency",
        element: <div>Currency</div>,
      },
      {
        path: "/paydesk",
        element: <div>Paydesk</div>,
      },
      {
        path: "/clients",
        element: <div>Clients</div>,
      },
    ],
  },
]);
