import { handleRegisterProveedor } from '@/slices/proveedor/thunks';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const RegisterProvider = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = () => {
        dispatch(handleRegisterProveedor(email));
    };

    return (
        <>
            <section className="relative block h-[18vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <div>
                <h2>Registro de Proveedor</h2>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleRegister}>Registrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </div>
        </>
    );
};

export default RegisterProvider;
