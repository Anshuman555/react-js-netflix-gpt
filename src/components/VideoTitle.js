import React from "react";

const VideoTitle = ({ title, overview, className = "" }) => {
  return (
    <div className={`${className} max-w-[90%] sm:max-w-[36rem]`}>
      <h1 className="text-3xl font-black tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 line-clamp-3 max-w-lg text-sm text-gray-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] sm:text-base">
        {overview}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button className="whitespace-nowrap rounded bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:px-8 sm:text-base">
          Play
        </button>
        <button className="whitespace-nowrap rounded bg-gray-500/70 px-6 py-2 text-sm font-semibold text-white transition hover:bg-gray-500/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:px-8 sm:text-base">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
