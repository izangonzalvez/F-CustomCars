import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { listBrakes } from "@/slices/brake/thunks";
import { listWheels } from '@/slices/wheel/thunks';

export function WheelList() {
    const { authToken } = useSelector((state) => state.auth);
    const { wheels, isLoading } = useSelector((state) => state.wheels);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listWheels());
    }, [authToken, dispatch]);

    return(
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Llantas</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        <p className="text-center">Cargando...</p>
                    ) : (
                        wheels.map(wheels => (
                            <div key={wheels.id} className="border rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white relative">
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold mb-2">{wheels.name}</div>
                                    <div>{`Estilo: ${wheels.type}`}</div>
                                    <div>{`Modelo: ${wheels.inch        }`}</div>
                                    <div>{`Precio: ${wheels.price}`}</div>
                                    <div>{`Proveedor ID: ${wheels.proveedor_id}`}</div> {/* Mostrar ID del proveedor */}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center space-x-2">
                                        <Link to={`/wheels/${wheels.id}`} className="text-cyan-600">Ver detalles</Link>
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

export default WheelList;
