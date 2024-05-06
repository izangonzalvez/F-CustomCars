import { Home, Profile, ProjectList, ProjectAdd,Community, Chat,Login, Register, Contact, Car } from "@/pages";
import ProjectShow from "./pages/project/ProjectShow";

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
    element: <Community />,
  },
  {
    name: "Chat",
    path: "/chat",
    element: <Chat />,
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
];

export default routes;
