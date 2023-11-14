import React, { createContext, useContext, useReducer } from 'react';
import { AuthProvider } from './authContext';
const AppContext = createContext();

const initialState = {
  openPlaylist: null,
  newSongs: [],
};

const actionTypes = {
  SET_OPEN_PLAYLIST: 'SET_OPEN_PLAYLIST',
  CLEAR_OPEN_PLAYLIST: 'CLEAR_OPEN_PLAYLIST',
  ADD_NEW_SONG: 'ADD_NEW_SONG',
  CLEAR_NEW_SONGS: 'CLEAR_NEW_SONGS',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_OPEN_PLAYLIST:
      return { ...state, openPlaylist: action.payload };
    case actionTypes.CLEAR_OPEN_PLAYLIST:
      return { ...state, openPlaylist: null };
    case actionTypes.ADD_NEW_SONG:
      return { ...state, newSongs: [...state.newSongs, action.payload] };
    case actionTypes.CLEAR_NEW_SONGS:
      return { ...state, newSongs: [] }; // Clear the newSongs array
    default:
      return state;
  }
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

export { actionTypes };