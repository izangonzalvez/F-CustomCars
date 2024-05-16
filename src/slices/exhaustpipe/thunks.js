import { setExhaustpipes, setLoading, setError } from "./exhaustpipeSlice";

export const listExhaustpipes = () => {
    return async (dispatch) => {
        try {
            const data = await fetch("http://127.0.0.1:8000/api/exhaustpipes", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });

            const response = await data.json();

            if (response.success === true) {
                dispatch(setExhaustpipes(response.data));
            } else {
                dispatch(setError(response));
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

export const addExhaustpipes = (exhasutpipeData) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));

            const data = await fetch("http://127.0.0.1:8000/api/exhaustpipes", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(exhasutpipeData),    
            });

            const response = await data.json();
            console.log(response);

            if (response.success === true) {
                dispatch(setExhaustpipes(response.data));
                console.log(response.data);
            } else {
                dispatch(setError(response));
            }

        } catch {
            dispatch(setError(error.message));
        }
    }
}
