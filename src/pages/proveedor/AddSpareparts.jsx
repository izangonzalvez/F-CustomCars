import React, { useState, useEffect } from 'react';
import BrakeList from './brake/BrakeList'; 
import BrakeAdd from './brake/BrakeAdd';

export function AddSpareparts() {

    return(
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
                        <h2 className="text-2xl font-bold mb-4">Crear nuevo recambio</h2>
                        <BrakeAdd />
                    </section>

                    {/* Bloque de listado de recambios */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Lista de recambios</h2>
                        <BrakeList />
                    </section>
                </div>
            </div>
        </>
    )
}

export default AddSpareparts; 
