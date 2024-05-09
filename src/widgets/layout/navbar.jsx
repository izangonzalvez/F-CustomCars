import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { doLogout } from "@/slices/auth/thunks";
import { setAuthToken, setRoles, setUser } from "@/slices/auth/authSlice";

export function Navbar({ brandName, routes, action }) {
  const navigate = useNavigate();

  const { usuari, authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthToken(localStorage.getItem('authToken')))
    dispatch(setUser(localStorage.getItem('user')))
    console.log(authToken)
    console.log(usuari)
  }, []);

  const logout = (e) => {
    e.preventDefault();
    dispatch(doLogout());
    console.log(authToken)
    navigate("/");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="px-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="../../../public/img/Coches.png"
                className="w-20 h-20"
                alt="Brand Logo"
              ></img>
            </Link>
            <div className={`pl-9 text-white hidden lg:flex lg:items-center lg:space-x-4 ${menuOpen ? 'hidden' : 'block'}`}>
              <Link to="/project" className="mr-4">Proyectos </Link>
              <Link to="/community" className="mr-4">Comunidad </Link>
              <Link to="/chat" className="mr-4">Chat </Link>
              <Link to="/contact" className="mr-4">Contacto </Link>
              <Link to="/prueba" className="mr-4">Prueba </Link>
              <Link to="/proveedor" className="mr-4">Proveedor</Link>

            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {authToken ? (
            <div>
              <a className="mr-4 text-white">{usuari}</a>
              <Button color="red" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="mr-4 text-white">Login</Link>
              <Link to="/register" className="mr-4 text-white">Register</Link>
            </div>
          )}
        </div>
      </nav>
      <div className={`lg:hidden absolute top-16 right-0 left-0 bg-black bg-opacity-90 ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link to="/project" className="text-white">Proyectos </Link>
          <Link to="/community" className="text-white">Comunidad </Link>
          <Link to="/chat" className="text-white">Chat </Link>
          <Link to="/contact" className="text-white">Contacto </Link>
          <Link to="/prueba" className="text-white">Prueba </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
