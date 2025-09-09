import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Decade70sAnime from "../components/70sAnime.tsx";
import Decade80sAnime from "../components/Decades80sAnime.tsx";
import Decade90sAnime from "../components/Decades90sAnime.tsx";
import Decade00sAnime from "../components/Decades00sAnime.tsx";
import Decade10sAnime from "../components/Decades10sAnime.tsx";

const Decades = () => {
  return (
    <div className="font-anton">
      <Header />
      <h1 className="mt-[65px] mb-[12px] text-3xl font-extrabold text-decoration-underline: underline underline-offset-2 text-brightred-600 text-center">
        DECADES
      </h1>
      <div>
        <div className="mt-[7px]">
          <div className="">
            <Subheader title="70's anime" />
          </div>
        </div>
        <div className="flex justify-around ml-[5px] mr-[5px]">
          <Decade70sAnime />
        </div>
        <div>
          <div className="mt-[10px]">
            <Subheader title="80's anime" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <Decade80sAnime />
          </div>
          <div className="mt-[10px]">
            <Subheader title="90's anime" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <Decade90sAnime />
          </div>
          <div className="mt-[10px]">
            <Subheader title="00's anime" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <Decade00sAnime />
          </div>
          <div className="mt-[10px]">
            <Subheader title="10's anime" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <Decade10sAnime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decades;