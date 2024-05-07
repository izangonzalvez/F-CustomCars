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

export const createCar = (carData, authToken) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/cars", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify(carData),
            });

            if (!response.ok) {
                throw new Error('Failed to create car. HTTP status: ' + response.status);
            }

            const responseData = await response.json();
            if (responseData && responseData.message) {
                console.log('Car created successfully!');
            } else {
                console.error('Failed to create car:', responseData);
            }
        } catch (error) {
            console.error('Failed to create car:', error.message);
        }
    };
};


export const showCars = (carId, authToken) => {
  return async (dispatch) => {
      try {
          const response = await fetch(`http://127.0.0.1:8000/api/cars/${carId}`, {
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`,
              },
              method: "GET",
          });

          const responseData = await response.json();

          if (responseData.success === true) {
              dispatch(setCar(responseData.data));
              dispatch(setAuthToken(responseData.authToken));
          } else {
              dispatch(setError(responseData));
          }
      } catch (error) {
          dispatch(setError(error.message));
      }
  };
};
