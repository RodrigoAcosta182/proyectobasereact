import { MODAL_HIDE, MODAL_SHOW } from "../../ActionTypes";

export const showModal = (template, params,listBotones,posicion) => (dispatch) => {
  dispatch({
    type: MODAL_SHOW,
    payload: {
      template: template,
      params: params,
      listBotones:listBotones,
      posicion:posicion,
    },
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: MODAL_HIDE,
  });
};
