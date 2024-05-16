import { setUser, setRoles, setAuthToken, resetAuthState } from "./authSlice";

export const doUser = (email) => {
    return async (dispatch, getState) => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
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
  

export const doLogin = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/login", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ email, password })
            })
            const response = await data.json()
            console.log(response)
            if (response.success == true) {
                localStorage.setItem('authToken', response.authToken);
                localStorage.setItem('user', email);
                console.log(response)
                dispatch(setAuthToken(response.authToken))
                dispatch(setUser(email))  
                dispatch(setRoles(response.roles))
            } else {
                //
            }
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const doRegister = (data) => {
    return async (dispatch) => {
        const { name, email, password } = data

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ name, email, password })
            })
            const responseData = await response.json();
            console.log(response)

            if (response.ok) {
                localStorage.setItem('authToken', responseData.authToken);
                localStorage.setItem('user', email);
                dispatch(setUser(email))  
                dispatch(setAuthToken(responseData.authToken));
                dispatch(setRoles(response.roles)) 
            } else {
                console.error("Error registering:", responseData.message);
            }   
        } catch (error) {
            console.error("Network error:", error);
        };
    }
}

export const doLogout = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/logout", {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${getState().auth.authToken}`,
                },
                method: "POST",
            });

            const responseData = await response.json();
            console.log(response)
            if (response.ok) {
                localStorage.removeItem('authToken');
                dispatch(setAuthToken(""));
                localStorage.removeItem('user');
                localStorage.removeItem('userId');
                localStorage.removeItem('roleId');
                dispatch(resetAuthState());
            } else {
                console.error("Error during logout:", responseData.message);
            }
        } catch (error) {
            console.error("Network error during logout:", error);
        } 
    }
}

