import React from "react";

const VideoTitle = ({ title, overview, className = "" }) => {
  return (
    <div className={`${className} max-w-[90%] sm:max-w-[36rem]`}>
      <h1 className="text-3xl font-black leading-[1.05] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-[4.2rem]">
        {title}
      </h1>
      <p className="mt-4 line-clamp-3 max-w-lg text-sm leading-snug text-[#e5e5e5] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] sm:text-base lg:text-lg">
        {overview}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button className="whitespace-nowrap rounded-[4px] bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:px-8 sm:py-2.5 sm:text-lg">
          Play
        </button>
        <button className="whitespace-nowrap rounded-[4px] bg-[rgba(109,109,110,0.7)] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[rgba(109,109,110,0.4)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:px-8 sm:py-2.5 sm:text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
