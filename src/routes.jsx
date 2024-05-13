import { Home, Profile, ProjectList, ProjectAdd,Login, Register, Contact, Car } from "@/pages";
import ProjectShow from "./pages/project/ProjectShow";
import PublishedCar from "./pages/project/PublishedCar";
import Proveedor, { ProveedorRegister } from "./pages/proveedor/ProveedorRegister";
import ProveedorLogin from "./pages/proveedor/ProveedorLogin";
import ProjectEdit from "./pages/project/ProjectEdit";
import ListProveedor from "./pages/proveedor/ListProveedor";

export const routes = [
  {
    name: "",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Proyectos",
    path: "/project",
    element: <ProjectList />,
  },
  {
    name: "Proyectos Add",
    path: "/projectAdd",
    element: <ProjectAdd />,
  },
  {
    name: "Ver Proyecto",
    path: "/project/:projectId",
    element: <ProjectShow />,
  },
  {
    name: "Comunidad",
    path: "/community",
    element: <PublishedCar />,
  },
  {
    name: "Contacto",
    path: "/contact",
    element: <Contact />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />,
  },
  {
    name: "Prueba 3D",
    path: "/prueba",
    element: <Car />,
  },
  {
    name: "Proveedor Register",
    path: "/proveedor/register",
    element: <ProveedorRegister />,
  },
  {
    name: "Proveedor Login",
    path: "/proveedor/login",
    element: <ProveedorLogin />,
  },
  {
    name: "Proveedor List",
    path: "/proveedor/list",
    element: <ListProveedor />,
  },
  {
    name: "Proyectos Edit",
    path: "/project/:projectId/edit",
    element: <ProjectEdit />,
  }
];

export default routes;
