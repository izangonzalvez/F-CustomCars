import { setProveedor, setAuthToken, setLoading, setRoles, setError } from "./proveedorSlice";

export const proveedorRegister = (data) => async (dispatch) => {
    console.log(data); // Verifica si los datos están llegando correctamente
    try {
        const { name, email, password } = data;
        const response = await fetch("http://127.0.0.1:8000/api/proveedorsRegister", {
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
        });
        
        const responseData = await response.json();
        console.log(responseData);

        if (response.ok) {
            localStorage.setItem('authToken', responseData.authToken);
            localStorage.setItem('user', email);
            dispatch(setAuthToken(responseData.authToken));
            dispatch(setProveedor(responseData.data));
            dispatch(setRoles(responseData.roles));
        } else {
            dispatch(setError(responseData));
        }
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const proveedorLogin = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/proveedorsLogin", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ email, password })
            })

            const response = await data.json()
            console.log(response)
            
            if (response.succes == true) {
                localStorage.setItem('authToken', response.authToken);
                localStorage.setItem('user', email);
                dispatch(setAuthToken(response.authToken))
                dispatch(setProveedor(email))
                dispatch(setRoles(response.roles))
            } else {
                dispatch(setError(responseData));
            }
                
        } catch (error) {
            dispatch(setError(error.message));
        }
    }
}