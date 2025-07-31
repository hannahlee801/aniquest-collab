import Header from "../components/Header";
import AiringComp from "../components/AiringComp";

const Airing = () => {
  return (
    <div className="font-anton ml-[25px] mr-[25px]">
      <Header />
      <h2 className="text-2xl mt-[70px] font-extrabold text-decoration-underline: underline underline-offset-2 text-brightred-600">
        AIRING
      </h2>
      <div className="mt-[5px] mb-[5px] flex flex-wrap justify-between">
        <AiringComp />
      </div>
    </div>
  );
};

export default Airing;