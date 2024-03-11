import AdminLayout from "~/layouts/AdminLayout";
import Dashboard from "~/pages/Dashboard";

const ClientRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
  ],
};

export default ClientRoutes;
