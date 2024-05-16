import { setSpoilers, setLoading, setError } from "./spoilerSlice";

export const listSpoilers = () => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/spoilers", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });

            const response = await data.json();
            console.log(response)
            if (response.success === true) {
                dispatch(setSpoilers(response.data));
            } else {
                dispatch(setError(response));
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

export const addSpoiler = (spoilerData) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const data = await fetch("http://127.0.0.1:8000/api/spoilers", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(spoilerData),    
            });

            const response = await data.json();
            console.log(response);

            if (response.success === true) {
                dispatch(setSpoilers(response.data));
                console.log(response.data);
            } else {
                dispatch(setError(response));
            }
            
        } catch {

        }
    }
}