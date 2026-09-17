import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies?.length) return null;

  const { id, original_title, overview } = movies[0];

  return (
    <div className="relative aspect-[16/7] w-full overflow-hidden">
      <VideoBackground movieId={id} />
      <div className="container absolute inset-0 z-10 mx-auto flex flex-col justify-center p-4">
        <VideoTitle
          title={original_title}
          overview={overview}
          className="text-white"
        />
      </div>
    </div>
  );
};

export default MainContainer;
