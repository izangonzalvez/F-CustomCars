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

            const responseData = await response.json();

            if (responseData.success === true) {
                dispatch(listCars(authToken))
                dispatch(setAuthToken(responseData.authToken));
            } else {
                dispatch(setError(responseData));
            }
        } catch (error) {
            dispatch(setError(error.message));
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

export const deleteCar = (carId, authToken) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/cars/${carId}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          method: "DELETE",
        });
  
        const responseData = await response.json();
  
        if (responseData.success === true) {
          dispatch(listCars(authToken))
          dispatch(setAuthToken(responseData.authToken));
        } else {
          dispatch(setError(responseData));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
  };

  export const publishCar = (carId, authToken) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/cars/${carId}/publish`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ post: true }),
        });
        const responseData = await response.json();
        if (responseData.success === true) {
        //   dispatch(setCars(responseData.data));
            dispatch(listCars(authToken))
           dispatch(setAuthToken(responseData.authToken));
        } else {
          dispatch(setError(responseData));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
  };
  