import Header from "../components/Header";
import Logo from "../components/Logo";
import HomeBrowse from "../components/HomeBrowse";
import HomePopularAnime from "../components/HomePopularAnime";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-anton ml-[25px] mr-[25px]">
      <Header />
      <Logo />
      <p className="text-brightred-600 font-extrabold text-2xl mt-[25px] mb-[10px] text-decoration-line: underline underline-offset-2 text-left">
        POPULAR ANIME THIS WEEK
      </p>
      <div>
        <HomePopularAnime />
      </div>
      <Link to="/browse">
        <h2 className="flex justify-center items-center text-brightred-600 font-extrabold text-3xl mt-[15px] mb-[10px] text-decoration-line: underline underline-offset-2 text-center">
          BROWSE
        </h2>
      </Link>
      <HomeBrowse />
    </div>
  );
};

export default Home;
