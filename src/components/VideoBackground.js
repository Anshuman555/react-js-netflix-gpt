import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/const";

const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();
    const trailer =
      json?.results?.find((v) => v.type === "Trailer" && v.site === "YouTube") ??
      json?.results?.[0];
    setTrailerKey(trailer?.key ?? null);
  };

  useEffect(() => {
    if (movieId) getMovieTrailer();
  }, [movieId]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {trailerKey && (
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-video w-full -translate-x-1/2 -translate-y-1/2 scale-125 border-0"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0&playsinline=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0`}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent shadow-[inset_0_-150px_110px_-50px_#141414]" />
    </div>
  );
};

export default VideoBackground;
