import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
// import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="relative min-h-screen w-full bg-[#141414]">
      <Header />
      <main className="w-full">
        {/* Main Container Banner */}
        <MainContainer />
        {/* Movies Recomendations Container*/}
        <div className="container mx-auto p-4 pb-16">
          {/* <SecondaryContainer /> */}
        </div>
      </main>
    </div>
  );
};

export default Browse;
