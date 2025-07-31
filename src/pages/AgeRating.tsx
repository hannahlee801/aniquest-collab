import Header from "../components/Header";
import Subheader from "../components/Subheader";
import AgeRatingG from "../components/AgeRatingG";
import AgeRatingPG from "../components/AgeRatingPG";
import AgeRatingR from "../components/AgeRatingR";

const AgeRating = () => {
  return (
    <div className="font-anton">
      <Header />
      <h1 className="mt-[65px] mb-[12px] text-3xl font-extrabold text-decoration-underline: underline underline-offset-2 text-brightred-600 text-center">
        AGE RATING
      </h1>
      <div>
        <div className="mt-[7px]">
          <div className="">
            <Subheader title="General Audiences" />
          </div>
        </div>
        <div className="flex justify-around ml-[5px] mr-[5px]">
          <AgeRatingG />
        </div>
        <div>
          <div className="mt-[10px]">
            <Subheader title="Parental Guidance Suggested" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <AgeRatingPG />
          </div>
          <div className="mt-[10px]">
            <Subheader title="Restricted" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <AgeRatingR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeRating;