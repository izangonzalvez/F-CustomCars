import { setSideskirts, setLoading, setError } from "./sideskirtSlice";

export const listSideskirts = () => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/sideskirts", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });

            const response = await data.json();
            console.log(response)

            if (response.success === true) {
                dispatch(setSideskirts(response.data));
            } else {
                dispatch(setError(response));
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

export const addSideskirts = (sideskirtData) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const data = await fetch("http://127.0.0.1:8000/api/sideskirts", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(sideskirtData),    
            });

            const response = await data.json();
            console.log(response);

            if (response.success === true) {
                dispatch(setSideskirts(response.data));
                console.log(response.data);
            } else {
                dispatch(setError(response));
            }
        } catch {
            dispatch(setError(error.message));
        }
    }
}
