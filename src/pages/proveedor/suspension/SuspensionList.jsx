import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { listSuspensions } from '@/slices/suspension/thunks';

export function SuspensionList() {
    const { authToken } = useSelector((state) => state.auth);
    const { suspensions, isLoading } = useSelector((state) => state.suspensions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listSuspensions());
    }, [authToken, dispatch]);

    return(
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Frenos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        <p className="text-center">Cargando...</p>
                    ) : (
                        suspensions.map(suspension => (
                            <div key={suspension.id} className="border rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white relative">
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold mb-2">{suspension.name}</div>
                                    <div>{`Estilo: ${suspension.type}`}</div>
                                    <div>{`Precio: ${suspension.price}`}</div>
                                    <div>{`Proveedor ID: ${suspension.proveedor_id}`}</div> {/* Mostrar ID del proveedor */}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center space-x-2">
                                        <Link to={`/suspension/${suspension.id}`} className="text-cyan-600">Ver detalles</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default SuspensionList;
