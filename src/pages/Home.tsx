import Header from "../Header";
import Logo from "../Logo";
import AnimeCard from "../AnimeCard";
import HomeBrowse from "../HomeBrowse";

const Home = () => {
  return (
    <div className="font-anton ml-[25px] mr-[25px]">
      <Header />
      <Logo />
      <p className="text-brightred-600 font-extrabold text-xl mt-[25px] mb-[10px] text-decoration-line: underline underline-offset-2 text-left">
        POPULAR ANIME THIS WEEK
      </p>
      <div className="flex justify-between">
        <AnimeCard
          banner="testing-dandadan.png"
          title="Testing"
          avgRating="99%"
          favoritesCount="400"
          ageRating="R"
        />
        <AnimeCard
          banner="testing-dandadan.png"
          title="Testing"
          avgRating="99%"
          favoritesCount="400"
          ageRating="R"
        />
        <AnimeCard
          banner="testing-dandadan.png"
          title="Testing"
          avgRating="99%"
          favoritesCount="400"
          ageRating="R"
        />
      </div>
      <h2 className="flex justify-center items-center text-brightred-600 font-extrabold text-xl mt-[15px] mb-[10px] text-decoration-line: underline underline-offset-2 text-center mb-[10px]">
        BROWSE
      </h2>
      <HomeBrowse />
    </div>
  );
};

export default Home;
