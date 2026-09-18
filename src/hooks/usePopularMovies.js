import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addPopularMoviesSlice } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    if (json) {
      dispatch(addPopularMoviesSlice(json.results));
    }
  };

  useEffect(() => {
    getPopularMoviesList();
  }, []);
};

export default usePopularMovies