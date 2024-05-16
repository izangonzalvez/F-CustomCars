import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrakes } from '@/slices/brake/thunks';
import { addEngines } from '@/slices/engine/thunks';

export function EngineAdd() {
    const dispatch = useDispatch();

    const { userId } = useSelector(state => state.auth);

    const [name, setName] = useState('');
    const [power, setPower] = useState('');
    const [revolutions, setRevolutions] = useState('');
    const [fuel, setFuel] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const engineData = {
            name: name,
            power: power,
            revolutions: revolutions,
            fuel: fuel,
            price: price,
            proveedor_id: userId
        };

        dispatch(addEngines(engineData));
        
    }

    return (
        <>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Motores</h1>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Nombre:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Potencia:</label>
                        <input type="text" value={power} onChange={(e) => setPower(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Revoluciones:</label>
                        <input type="text" value={revolutions} onChange={(e) => setRevolutions(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Combustible:</label>
                        <input type="text" value={fuel} onChange={(e) => setFuel(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Precio:</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="input" />
                    </div>

                    <button type="submit" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Añadir</button>
                    {/* <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">👁️</button>
                    <button onClick={() => setShowList(true)} className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Lista</button> */}
                </form>
            </div>
        </>
    )
}

export default EngineAdd;
