import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="relative min-h-screen w-full bg-[#141414]">
      <Header />
      <main className="w-full">
        {/* Main Container Banner */}
        <MainContainer />
        {/* Movies Recomendations Container*/}
        <div className="relative z-20 -mt-[6%] px-4 pb-16 md:px-12">
          <SecondaryContainer />
        </div>
      </main>
    </div>
  );
};

export default Browse;
