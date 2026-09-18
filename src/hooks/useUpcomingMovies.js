import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addUpcomingMoviesSlice } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    if (json) {
      dispatch(addUpcomingMoviesSlice(json.results));
    }
  };

  useEffect(() => {
    getUpcomingMoviesList();
  }, []);
};

export default useUpcomingMovies