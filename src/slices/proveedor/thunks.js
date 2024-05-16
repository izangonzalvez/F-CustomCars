import { setAuthToken, setUser, setRoles, resetAuthState, setError } from "./proveedorSlice";

export const doUserProv = (email) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/userProv", {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${getState().auth.authToken}`,
                },
            });

            const responseData = await response.json();
            console.log(responseData)

            if (response.ok) {
                dispatch(setUser(responseData.data));
            } else {
                console.error("Error obteniendo los datos de los proveedores:", responseData.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        };
    }
}


export const doRegisterProv = (data) => {
    return async (dispatch) => {
        const {name, email, password } = data
        const role_id = 4;

        try {
            const response = await fetch("http://127.0.0.1:8000/api/registerProv", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ name, email, password, role_id })
            })
            const data =  await response.json();
            console.log(response)

            if (response.ok) {
                localStorage.setItem('authToken', data.authToken);
                localStorage.setItem('user', email);
                dispatch(setUser(email))  
                dispatch(setAuthToken(data.authToken));
                dispatch(setRoles(response.roles)) 
            } else {
                console.error("Error registering:", response.message);
            }
        } catch {

        }
    }
}



// export const listProveedor = (authToken, email) => {
//     return async (dispatch, getState) => {
//         const data = await fetch("http://127.0.0.1:8000/api/proveedors", {
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${authToken}`,
//             },
//             method: "GET",
//         })
//         const response = await data.json();
//         console.log(response.data)

//         if (response.success == true) {
//             dispatch(setProveedors(response.data));
//             dispatch(setAuthToken(response.authToken));
//         } else {
//             dispatch(setError(response))
//         }
//     }
// }