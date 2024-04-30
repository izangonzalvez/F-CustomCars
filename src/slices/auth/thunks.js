import { setUser, setRoles } from "./authSlice";

export const doLogin = (email, password) => {
    return async (dispatch, getState) => {
        try {

            const login = async () => {
                const data = await fetch("http://127.0.0.1:8000/api/login", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({ email, password })
                })
                const response = await data.json()

                if (response.success) {
                    // localStorage.setItem('authToken', JSON.stringify(response.authToken));
                    // dispatch(setAuthToken(response.authToken))

                    dispatch(setUser(response.user))  
                    dispatch(setRoles(response.roles))
                }
            }
            login()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const doRegister = (data) => {
    return async (dispatch, getState) => {
        try {
            const { name, email, password } = data

            const register = async () => {
                const data = await fetch("http://127.0.0.1:8000/api/register", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({ name, email, password })
                })
                const response = await data.json();

                if (response.success) {
                    dispatch(setUser(response.user))  
                    dispatch(setRoles(response.roles)) 
                }
            }
            register()
        } catch (error) {
            console.log(error);
            alert("Catch error");
        };
    }
}

export const doLogout = () => {
    return async (dispatch, getState) => {
        try {

            const logout = async() =>{
                const data = await fetch("http://127.0.0.1:8000/api/logout", {
                    headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                    },
                    method: "POST",
                })
                const response = await data.json()
            
                if (response.success) {
                    localStorage.removeItem('authToken');
                    dispatch(setAuthToken(null)) 
                } else {
                    console.log(response);
                    alert("Catchch");
                }
            }
        } catch (error) {
            console.log(error);
            alert("Catchch");
        } 
    }
}
    
export const doUser = (authToken) => {
    return async (dispatch, getState) => {
        const user = async() =>{
            const data = await fetch("http://127.0.0.1:8000/api/user", {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // Authorization: `Bearer ${authToken}`,
                },
                method: "GET",
            })
            const response = await data.json()

            if (response.success) {
                // localStorage.setItem('usuari', response.user.name)
                dispatch(setUser(response.user.name))
                dispatch(setRoles(response.roles))
            } else {
                console.log(response);
                alert("Catchch");
            }

        }
        user();
    }

}

