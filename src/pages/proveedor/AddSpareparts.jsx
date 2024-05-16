import React, { useState } from 'react';
import BrakeList from './brake/BrakeList'; 
import BrakeAdd from './brake/BrakeAdd';

export function AddSpareparts() {
    const [showListPopup, setShowListPopup] = useState(false);

    return (
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Añade los nuevos recambios</h1>
                <div>
                    {/* Bloque de creación de recambios */}
                    <section className="mb-8">
                        <BrakeAdd />
                        <button onClick={() => setShowListPopup(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Mostrar lista</button>

                        {showListPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
                                    <h2 className="text-2xl font-bold mb-4">Lista de recambios</h2>
                                    <BrakeList />
                                    <button onClick={() => setShowListPopup(false)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg mt-4">Cerrar</button>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </>
    )
}

export default AddSpareparts;
