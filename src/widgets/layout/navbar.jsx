import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/slices/auth/authSlice";
import { doLogout } from "@/slices/auth/thunks";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  let [ roles, setRoles ] = useState([]);
  const navigate = useNavigate();
    
  const { usuari,authToken } = useSelector (state => state.auth)
  const dispatch = useDispatch() 

  const getUser = async (e) => {
    try {
      const data = await fetch("http://127.0.0.1:8000/api/user", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        method: "GET",
      })
      const resposta = await data.json();
      if (resposta.success === true) {
       
        dispatch(setUser(resposta.user.email));
        setRoles(resposta.roles);
      }else{
        console.log("La resposta no ha triomfat");
      }            
    } catch {
      console.log("Error");
    }
  };

  useEffect(()=>{
    getUser();
  }, []) 

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  const logout = (e) => {
    e.preventDefault();
    dispatch(doLogout());
    navigate("/")
};
  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/" className="flex items-center">
          <img src="../../../public/img/Coches.png" alt="Logo" className="mr-2 w-20 h-100" />
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          <a href="https://www.material-tailwind.com/blocks?ref=mtkr" target="_blank"/>
          {/* {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })} */}
        </div>
        <div>
              { usuari } <a>(<span></span> { roles.map (  (v)=> (
                            <span key={v}> {v} </span>
                        ) ) })</a>
            ( 
              <a href=""></a>
              <a className="text-orange-800" onClick={logout} href="">Logout</a>)
              
          </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
          
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          <a href="https://www.material-tailwind.com/blocks/react?ref=mtkr" target="_blank" className="mb-2 block" />
        </div>
        <div>
              { usuari } <a>(<span></span> { roles.map (  (v)=> (
                            <span key={v}> {v} </span>
                        ) ) })</a>
            ( 
              <a href=""></a>
              <a className="text-orange-800" onClick={logout} href="">Logout</a>)
              
          </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "CustomCars Luxury",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
