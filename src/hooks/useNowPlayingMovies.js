import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addNowPlayingMoviesSlice } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    if (json) {
      dispatch(addNowPlayingMoviesSlice(json.results));
    }
  };

  useEffect(() => {
    getNowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies