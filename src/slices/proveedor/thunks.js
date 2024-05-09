import { setProveedor, setLoading, setError } from "./proveedorSlice";

export const handleRegisterProveedor = async () => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/proveedor", {
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                },
                method: 'POST',
    
                body: JSON.stringify({ email }),
            });
    
            const response = await response.json();
    
            if (response.success == true) {
                dispatch(setProveedor(response.data));
    
            } else {
                dispatch(setError(response));
            }
          
        } catch (error) {
            dispatch(setError(error.message))
        };
    };
};