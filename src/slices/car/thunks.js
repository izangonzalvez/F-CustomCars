import { set } from "react-hook-form";
import { setLoading,setCar, setCars, setIgame, setAuthToken, setError} from "./carSlices";

export const listCars = (authToken) => {
    return async (dispatch, getState) => {
        console.log(authToken);

        const data = await fetch("http://127.0.0.1:8000/api/cars", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            method: "GET",
        });

        const response = await data.json();

        if (response.success == true) {
            dispatch(setCars(response.data));
            dispatch(setAuthToken(response.authToken));
        } else {
            dispatch(setError(response))
        }

    }
}