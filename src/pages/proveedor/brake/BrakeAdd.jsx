import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrakes } from '@/slices/brake/thunks';

export function BrakeAdd() {
    const dispatch = useDispatch();

    const { userId } = useSelector(state => state.auth);

    const [name, setName] = useState('');
    const [style, setStyle] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const brakeData = {
            name: name,
            style: style,
            model: model,
            price: price,
            proveedor_id: userId
        };

        // Despachar la acción para agregar frenos
        dispatch(addBrakes(brakeData));
    }

    return (
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Frenos</h1>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Nombre:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Estilo:</label>
                        <input type="text" value={style} onChange={(e) => setStyle(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Modelo:</label>
                        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Precio:</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="input" />
                    </div>

                    <button type="submit" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Añadir Frenos</button>
                </form>
            </div>
        </>
    )
}

export default BrakeAdd;
