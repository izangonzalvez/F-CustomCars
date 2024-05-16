import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { listExhaustpipes } from '@/slices/exhaustpipe/thunks';

export function ExhaustpipeList() {
    const { authToken } = useSelector((state) => state.auth);
    const { exhaustpipes, isLoading } = useSelector((state) => state.exhaustpipes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listExhaustpipes());
    }, [authToken, dispatch]);

    return(
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Escapes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        <p className="text-center">Cargando...</p>
                    ) : (
                        exhaustpipes.map(exhaustpipe => (
                            <div key={exhaustpipe.id} className="border rounded-lg shadow-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white relative">
                                <div className="flex flex-col">
                                    {/* <div className="text-lg font-semibold mb-2">{exhaustpipe.name}</div> */}
                                    <div>{`Tamaño: ${exhaustpipe.size}`}</div>
                                    <div>{`Tipo: ${exhaustpipe.type}`}</div>
                                    <div>{`Precio: ${exhaustpipe.price}`}</div>
                                    <div>{`Proveedor ID: ${exhaustpipe.proveedor_id}`}</div> 
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center space-x-2">
                                        <Link to={`/exhaustpipe/${exhaustpipe.id}`} className="text-cyan-600">Ver detalles</Link>
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

export default ExhaustpipeList;
