import { useRoutes } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import AdminRoutes from "./AdminRoutes";

function RoutesApp() {
  return useRoutes([ClientRoutes, AdminRoutes]);
}

export default RoutesApp;
