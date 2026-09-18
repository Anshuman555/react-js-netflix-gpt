import { useEffect } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    console.log("nowPlayingMovies", nowPlayingMovies)
    console.log("popularMovies", popularMovies)
    console.log("topRatedMovies", topRatedMovies)
    console.log("upcomingMovies", upcomingMovies)

  }, [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies])
  return (
    <div className="flex w-full flex-col gap-2 md:gap-4">
      {nowPlayingMovies && (
        <div className="flex w-full flex-col">
          <h2 className="text-[15px] font-bold text-[#e5e5e5] sm:text-lg md:text-xl">Now Playing Movies</h2>
          <MovieList movieList={nowPlayingMovies} />
        </div>
      )}
      {popularMovies && (
        <div className="flex w-full flex-col">
          <h2 className="text-[15px] font-bold text-[#e5e5e5] sm:text-lg md:text-xl">Popular Movies</h2>
          <MovieList movieList={popularMovies} />
        </div>
      )}
      {topRatedMovies && (
        <div className="flex w-full flex-col">
          <h2 className="text-[15px] font-bold text-[#e5e5e5] sm:text-lg md:text-xl">Top Movies</h2>
          <MovieList movieList={topRatedMovies} />
        </div>
      )}
      {upcomingMovies && (
        <div className="flex w-full flex-col">
          <h2 className="text-[15px] font-bold text-[#e5e5e5] sm:text-lg md:text-xl">Upcoming Movies</h2>
          <MovieList movieList={upcomingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
