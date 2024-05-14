import { setBrakes, setLoading, setError } from "./brakeSlice";

export const listBrakes = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true)); // Establecer isLoading a true al inicio de la petición

            const data = await fetch("http://127.0.0.1:8000/api/brakes", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });

            const response = await data.json();
            console.log(response);
            if (response.success === true) {
                dispatch(setBrakes(response.data));
                console.log(response.data);
            } else {
                dispatch(setError(response));
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

export const addBrakes = (brakeData) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const data = await fetch("http://127.0.0.1:8000/api/brakes", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(brakeData),    
            });

            const response = await data.json();
            console.log(response);

            if (response.success === true) {
                dispatch(setBrakes(response.data));
                console.log(response.data);
            } else {
                dispatch(setError(response));
            }
            
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

