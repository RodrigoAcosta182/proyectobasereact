import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../../ActionTypes";
import axiosInstance from "../../../helpers/axiosInstance";
import generateUUID from "../../../utils/generateUUID";

export const login =
  (username, password  ) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    axiosInstance()
      .post("/auth", {
        password: password,
        usuario: username.toUpperCase(),
      })
      .then((res) => {
        sessionStorage.token = generateUUID();
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        let error = {
          detail: err.response
            ? err.response.data
            : "Error al contactar el server.",
        };

        dispatch({
          type: LOGIN_ERROR,
          payload: error,
        });
      });
  };

