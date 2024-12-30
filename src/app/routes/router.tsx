import { createBrowserRouter } from "react-router";
import Layout from "../../pages/Layout";
import TransactionsPage from "../../pages/TransactionsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/transactions",
        element: <TransactionsPage />,
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
