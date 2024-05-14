import { setProveedor ,setProveedors, setAuthToken, setLoggedInProveedorId,  setLoading, setRoles, setError } from "./proveedorSlice";

export const proveedorRegister = (data) => async (dispatch) => {
    console.log(data); 
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

export const listProveedor = (authToken, email) => {
    return async (dispatch, getState) => {
        const data = await fetch("http://127.0.0.1:8000/api/proveedors", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            method: "GET",
        })
        const response = await data.json();
        console.log(response.data)

        if (response.success == true) {
            dispatch(setProveedors(response.data));
            dispatch(setAuthToken(response.authToken));
        } else {
            dispatch(setError(response))
        }
    }
}