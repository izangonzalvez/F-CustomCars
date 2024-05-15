import { setProveedor, setAuthToken,  setRoles, setError, resetAuthState } from "./proveedorSlice";

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
        console.log(responseData);
  
        if (response.ok) {
          const user = responseData.data.find(user => user.email === email);
  
          if (user) {
            localStorage.setItem('userId', user.id);
            localStorage.setItem('roleId', user.role_id);
          } else {
            console.error("El usuario no fue encontrado en la respuesta del servidor.");
          }
        } else {
          console.error("Error obteniendo los datos del usuario:", responseData.message);
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




// import { setProveedor ,setProveedors, setAuthToken, setLoggedInProveedorId,  setLoading, setRoles, setError } from "./proveedorSlice";

// export const proveedorRegister = (data) => async (dispatch) => {
//     console.log(data); 
//     try {
//         const { name, email, password } = data;
//         const response = await fetch("http://127.0.0.1:8000/api/proveedorsRegister", {
//             headers: {
//                 Accept: "application/json",
//                 'Content-Type': 'application/json',
//             },
//             method: 'POST',
//             body: JSON.stringify({ name, email, password }),
//         });
        
//         const responseData = await response.json();
//         console.log(responseData);

//         if (response.ok) {
//             localStorage.setItem('authToken', responseData.authToken);
//             localStorage.setItem('user', email);
//             dispatch(setAuthToken(responseData.authToken));
//             dispatch(setProveedor(responseData.data));
//             dispatch(setRoles(responseData.roles));
//         } else {
//             dispatch(setError(responseData));
//         }
//     } catch (error) {
//         dispatch(setError(error.message));
//     }
// };

// export const proveedorLogin = (email, password) => {
//     return async (dispatch, getState) => {
//         try {
//             const data = await fetch("http://127.0.0.1:8000/api/proveedorsLogin", {
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 method: "POST",
//                 body: JSON.stringify({ email, password })
//             })

//             const response = await data.json()
//             console.log(response)
            
//             if (response.succes == true) {
//                 localStorage.setItem('authToken', response.authToken);
//                 localStorage.setItem('user', email);
//                 dispatch(setAuthToken(response.authToken))
//                 dispatch(setProveedor(email))
//                 dispatch(setRoles(response.roles))
//             } else {
//                 dispatch(setError(responseData));
//             }
                
//         } catch (error) {
//             dispatch(setError(error.message));
//         }
//     }
// }

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