import { setWheels, setLoading, setError } from "./wheelSlice";

export const listWheels = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true)); // Establecer isLoading a true al inicio de la petición

            const data = await fetch("http://127.0.0.1:8000/api/wheels", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });

            const response = await data.json();
            console.log(response);

            if (response.success === true) {
                dispatch(setWheels(response.data));
                console.log(response.data);
            } else {
                dispatch(setError(response));
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};
