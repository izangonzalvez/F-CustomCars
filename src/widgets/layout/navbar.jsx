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
            <div className="pl-9 text-white ">
              <Link to="/project" className="mr-4">Proyectos </Link>
              <Link to="/community" className="mr-4">Comunidad </Link>
              <Link to="/chat" className="mr-4">Chat </Link>
              <Link to="/contact" className="mr-4">Contacto </Link>
              <Link to="/prueba" className="mr-4">Prueba </Link>
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
