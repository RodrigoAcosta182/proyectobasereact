import { createContext, useEffect, useReducer } from "react";

import authInitialState from "./initialStates/authInitialState";
import modalInitialState from "./initialStates/modalInitialState";
import toasterInitialState from "./initialStates/toasterInitialState";

import auth from "./reducers/auth";
import modal from "./reducers/modal";
import toaster from "./reducers/toaster";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, [], () => {
    const localData = sessionStorage.auth;
    return localData ? JSON.parse(localData) : authInitialState;
  });

  const [modalState, modalDispatch] = useReducer(modal, modalInitialState);
  const [toasterState, toasterDispatch] = useReducer(
    toaster,
    toasterInitialState
  );

  useEffect(() => {
    sessionStorage.auth = JSON.stringify(authState);
  }, [authState]);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        modalState,
        modalDispatch,
        toasterState,
        toasterDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
