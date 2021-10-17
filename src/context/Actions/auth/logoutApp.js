import { LOGOUT_USER } from "../../ActionTypes";

export const logoutApp = (history) => (dispatch) => {
  sessionStorage.removeItem("token");
  dispatch({ type: LOGOUT_USER });
  history.push("/");
};
