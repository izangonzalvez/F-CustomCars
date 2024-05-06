// engineThunks.js
import { setEngines, setLoading, setError } from "./engineSlice";

export const listEngines = () => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/engines", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });

            const response = await data.json();

            if (response.success === true) {
                dispatch(setEngines(response.data));
            } else {
                dispatch(setError(response));
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};
