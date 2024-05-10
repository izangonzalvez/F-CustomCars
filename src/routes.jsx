import { Home, Profile, ProjectList, ProjectAdd,Login, Register, Contact, Car } from "@/pages";
import ProjectShow from "./pages/project/ProjectShow";
import PublishedCar from "./pages/project/PublishedCar";
import RegisterProvider from "./pages/proveedor/RegisterProveedor";
import ProjectEdit from "./pages/project/ProjectEdit";

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
    name: "Proveedor",
    path: "/proveedor",
    element: <RegisterProvider />,
  },
  {
    name: "Proyectos Edit",
    path: "/project/:projectId/edit",
    element: <ProjectEdit />,
  }
];

export default routes;
