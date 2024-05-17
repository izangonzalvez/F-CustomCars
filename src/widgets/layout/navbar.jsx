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

  const roleId = localStorage.getItem('roleId');

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
            <div className="pl-9 text-white hidden lg:flex lg:items-center lg:space-x-4">
              <div className="relative">
                <Link to="/project" className="mr-4">
                  Proyectos 
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg">
                    <Link to="/ruta1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Opción 1</Link>
                    <Link to="/ruta2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Opción 2</Link>
                  </div>
                </Link>
              </div>
              <Link to="/community" className="mr-4">Comunidad </Link>
              <Link to="/contact" className="mr-4">Contacto </Link>
              <Link to="/prueba" className="mr-4">Prueba </Link>
              {(roleId === "1" || roleId === "4") && 
                <div className="relative">
                  <Link to="/proveedor/list" className="mr-4">
                    Proveedores 
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg">
                      <Link to="/ruta3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Opción 3</Link>
                      <Link to="/ruta4" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Opción 4</Link>
                    </div>
                  </Link>
                </div>
              }
              {roleId == "1" && <Link to="/contactList" className="mr-4">Lista de contacts </Link>}
            </div>
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
    </>
  );
}

export default Navbar;
