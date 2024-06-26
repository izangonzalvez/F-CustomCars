import { setLights, setLoading, setError } from "./lightSlice";

export const listLights = () => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/lights", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });

            const response = await data.json();
            console.log(response);

            if (response.success === true) {
                dispatch(setLights(response.data));
            } else {
                dispatch(setError(response));
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

export const addLights = (lightData) => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/lights", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(lightData),    
            });

            const response = await data.json();
            console.log(response)

            if (response.success === true) {
                dispatch(setLights(response.data));
                console.log(response.data);
            } else {
                dispatch(setError(response));
            }

        } catch {
            dispatch(setError(error.message));
        }
    }
}
