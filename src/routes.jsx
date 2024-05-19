import { Home, Profile, ProjectList, ProjectAdd,Login, Register, Contact, Car } from "@/pages";
import ProjectShow from "./pages/project/ProjectShow";
import PublishedCar from "./pages/project/PublishedCar";
import Proveedor, { ProveedorRegister } from "./pages/proveedor/ProveedorRegister";

import ProjectEdit from "./pages/project/ProjectEdit";
import ContactList from "./pages/contact/ContactList";
import AddSpareparts from "./pages/proveedor/AddSpareparts";

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
    name: "Lista Contactos",
    path: "/contactList",
    element: <ContactList />,
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
    name: "Proveedor Register",
    path: "/proveedor/register",
    element: <ProveedorRegister />,
  },
  {
    name: "Proveedor Login",
    path: "/proveedor/add-spareparts",
    element: <AddSpareparts />,
  },


  {
    name: "Proyectos Edit",
    path: "/project/:projectId/edit",
    element: <ProjectEdit />,
  }
];

export default routes;
