import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addTopRatedMoviesSlice } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    if (json) {
      dispatch(addTopRatedMoviesSlice(json.results));
    }
  };

  useEffect(() => {
    getTopRatedMoviesList();
  }, []);
};

export default useTopRatedMovies