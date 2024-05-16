import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { doUserProv } from "@/slices/proveedor/thunks";

const ProveedorList = () => {
  const { authToken } = useSelector((state) => state.auth);
  const { usuari, isLoading } = useSelector((state) => state.proveedors);
  const roleID = localStorage.getItem('roleId'); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (authToken) {
      dispatch(doUserProv(authToken));
    }
  }, [authToken, dispatch]);

  console.log(usuari);

  return (
    <>
      <section className="relative block h-[18vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Lista de Proveedores</h1>
        <div className="mb-8">
          <Link to="/proveedor/add-spareparts">
            <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">
              Agregar recambios
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <p className="text-center">Cargando...</p>
          ) : (
            usuari.map((user) => (
              <div
                key={user.id}
                className={`border rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white relative`}
              >
                <div className="flex flex-col">
                  <div className="text-lg font-semibold mb-2">{user.name}</div>
                  <div className="text-lg mb-2">{user.email}</div>
                  <hr className="my-4 border-t border-gray-300" />
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <Link to={`/user/${user.id}`} className="text-cyan-600">👁️</Link>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-b-lg"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProveedorList;
