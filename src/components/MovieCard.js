const MovieCard = (movieData) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-[4px] bg-[#181818] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition duration-300 ease-out hover:z-10 hover:scale-[1.07] hover:shadow-[0_12px_28px_rgba(0,0,0,0.85)]">
      <img
        alt="1"
        className="block aspect-[2/3] w-full object-cover"
        src={`https://image.tmdb.org/t/p/w500/${movieData.movieData.poster_path}`}
      />
      <div className="absolute right-2 top-2 rounded-[3px] bg-black/75 px-1.5 py-0.5 text-[11px] font-semibold tracking-wide text-white ring-1 ring-white/15">
        Imdb {movieData.movieData?.vote_average}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent px-2 pb-2 pt-10">
        <h2 className="line-clamp-2 text-[13px] font-semibold leading-tight text-[rgba(255,255,255,.9)]">
          {movieData.movieData.title}
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;
