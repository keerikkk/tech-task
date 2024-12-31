import { createBrowserRouter } from "react-router";
import Layout from "../../pages/Layout";
import TransactionsPage from "../../pages/TransactionsPage";
import { ProtectedRoute } from "../../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/transactions",
        element: (
          <ProtectedRoute>
            <TransactionsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/currency",
        element: (
          <ProtectedRoute>
            <div>Currency</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "/paydesk",
        element: (
          <ProtectedRoute>
            <div>Paydesk</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "/clients",
        element: (
          <ProtectedRoute>
            <div>Clients</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
