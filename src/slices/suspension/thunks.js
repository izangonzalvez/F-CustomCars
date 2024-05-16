import { setSuspensions, setLoading, setError } from "./suspensionSlice";

export const listSuspensions = () => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/suspensions", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });

            const response = await data.json();

            if (response.success === true) {
                dispatch(setSuspensions(response.data));
            } else {
                dispatch(setError(response));
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};


export const addSuspension = (suspensionData) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const data = await fetch("http://127.0.0.1:8000/api/suspensions", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(suspensionData),    
            });

            const response = await data.json();
            console.log(response);

            if (response.success === true) {
                dispatch(setSuspensions(response.data));
                console.log(response.data);
            } else {
                dispatch(setError(response));
            }
            
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};