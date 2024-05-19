import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { listLights } from '@/slices/light/thunks';

export function LightList() {
    const { authToken } = useSelector((state) => state.auth);
    const { lights, isLoading } = useSelector((state) => state.lights);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listLights());
    }, [authToken, dispatch]);

    return(
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Luces</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        <p className="text-center">Cargando...</p>
                    ) : (
                        lights.map(light => (
                            <div key={light.id} className="border rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white relative">
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold mb-2">{light.name}</div>
                                    <div>{`Tipo: ${light.type}`}</div>
                                    <div>{`Color: ${light.color}`}</div>
                                    <div>{`Precio: ${light.price}`}</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default LightList;
