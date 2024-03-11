import ClientLayout from "~/layouts/ClientLayout";
import Dashboard from "~/pages/Dashboard";

const ClientRoutes = {
  path: "",
  element: <ClientLayout />,
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
  ],
};

export default ClientRoutes;
