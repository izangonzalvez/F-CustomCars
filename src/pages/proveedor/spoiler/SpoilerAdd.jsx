import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrakes } from '@/slices/brake/thunks';
import { addSpoiler } from '@/slices/spoiler/thunks';

export function SpoilerAdd() {
    const dispatch = useDispatch();

    const { userId } = useSelector(state => state.auth);

    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [material, setMaterial] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const spoilerData = {
            type: type,
            size: size,
            material: material,
            price: price,
            proveedor_id: userId
        };

        dispatch(addSpoiler(spoilerData));
        
    }

    return (
        <>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Aleron</h1>

                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Tipo:</label>
                        <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Tamaño:</label>
                        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Material:</label>
                        <input type="text" value={material} onChange={(e) => setMaterial(e.target.value)} className="input" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-900 font-light">Precio:</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="input" />
                    </div>

                    <button type="submit" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-full shadow-lg">Añadir</button>
                    
                </form>
            </div>
        </>
    )
}

export default SpoilerAdd;
