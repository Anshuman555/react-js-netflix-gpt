import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import nowPlayingMoviesSlice from "./nowPlayingMoviesSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies: nowPlayingMoviesSlice,
  },
});

export default appStore;
