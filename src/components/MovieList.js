import MovieCard from "./MovieCard";

const MovieList = (movieList) => {
  return (
    <div className="scrollbar-hide -mx-4 grid auto-cols-[132px] grid-flow-col gap-2 overflow-x-auto px-4 py-6 sm:auto-cols-[160px] sm:gap-3 md:-mx-12 md:auto-cols-[180px] md:px-12">
      {movieList.movieList.map((movie) => (
        <MovieCard className="" key={movie.id} movieData={movie} />
      ))}
    </div>
  );
};

export default MovieList;
