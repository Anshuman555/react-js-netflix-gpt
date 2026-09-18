import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null
  },
  reducers: {
    addNowPlayingMoviesSlice: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMoviesSlice: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMoviesSlice: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMoviesSlice: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMoviesSlice, addPopularMoviesSlice, addTopRatedMoviesSlice, addUpcomingMoviesSlice } = moviesSlice.actions;
export default moviesSlice.reducer;
