import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProveedor } from "@/slices/proveedor/thunks";

const ProveedorList = () => {
  const { authToken, proveedorLogueado } = useSelector((state) => state.auth);
  const { proveedors, isLoading } = useSelector((state) => state.proveedors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProveedor(authToken));
  }, [authToken, dispatch]);

  

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
            proveedors.map((proveedor) => (
              <div
                key={proveedor.id}
                className={`border rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white relative ${
                  proveedorLogueado && proveedor.id === proveedorLogueado.id ? "bg-green-100" : ""
                }`}
              >
                <div className="flex flex-col">
                  <div className="text-lg font-semibold mb-2">{proveedor.name}</div>
                  <div className="text-lg mb-2">{proveedor.email}</div>
                  <hr className="my-4 border-t border-gray-300" />
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    
                    <Link to={`/proveedor/${proveedor.id}`} className="text-cyan-600">👁️</Link>
                    {/* <Link to={`/proveedor/${proveedor.id}/edit`} className="text-yellow-600">🖊️</Link> */}
                    {/* <button onClick={() => deleteProveedor(proveedor.id)} className="text-red-600">🗑️</button> */}
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
