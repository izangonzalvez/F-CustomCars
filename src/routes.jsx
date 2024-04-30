import { Home, Profile, Project, Community, Chat,Login, Register, Contact } from "@/pages";

export const routes = [
  {
    name: "",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Proyectos",
    path: "/project",
    element: <Project />,
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
];

export default routes;
