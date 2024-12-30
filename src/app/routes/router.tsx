import { createBrowserRouter } from "react-router";
import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
