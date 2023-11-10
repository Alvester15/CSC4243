import React, { createContext, useContext, useReducer } from 'react';
import { AuthProvider } from './authContext';
const AppContext = createContext();

const initialState = {
  // Your initial state here
};

const appReducer = (state, action) => {
  // Your state management logic here
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AuthProvider>{children}</AuthProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
