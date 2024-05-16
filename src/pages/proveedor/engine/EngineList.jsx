import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { listEngines } from '@/slices/engine/thunks';

export function EngineList() {
    const { authToken } = useSelector((state) => state.auth);
    const { engines, isLoading } = useSelector((state) => state.engines);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEngines());
    }, [authToken, dispatch]);

    return(
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Motores</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        <p className="text-center">Cargando...</p>
                    ) : (
                        engines.map(engine => (
                            <div key={engine.id} className="border rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white relative">
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold mb-2">{engine.name}</div>
                                    <div>{`Nombre: ${engine.name}`}</div>
                                    <div>{`Potencia: ${engine.power}`}</div>
                                    <div>{`Revoluciones: ${engine.revolutions}`}</div>
                                    <div>{`Combustible: ${engine.fuel}`}</div> 
                                    <div>{`Precio: ${engine.price}`}</div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center space-x-2">
                                        <Link to={`/engine/${engine.id}`} className="text-cyan-600">Ver detalles</Link>
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

export default EngineList;
