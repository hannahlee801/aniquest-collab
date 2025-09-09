import Header from "../components/Header";
import Subheader from "../components/Subheader";
import SmallerAnimeCard from "../components/SmallerAnimeCard.tsx";
import GenreActionAnime from "../components/GenreAction.tsx";
import GenreFantasyAnime from "../components/GenreFantasy.tsx";
import GenreDramaAnime from "../components/GenreDrama.tsx";
import GenreSciFiAnime from "../components/GenreSciFi.tsx";
import GenreHorrorAnime from "../components/GenreHorror.tsx";
import GenreRomanceAnime from "../components/GenreRomance.tsx";

const Genres = () => {
  return (
    <div className="font-anton">
      <Header />
      <h1 className="mt-[65px] mb-[12px] text-3xl font-extrabold text-decoration-underline: underline underline-offset-2 text-brightred-600 text-center">
        GENRES
      </h1>
      <div>
        <div className="mt-[7px]">
          <div className="">
            <Subheader title="Action" />
          </div>
        </div>
        <div className="flex justify-around ml-[5px] mr-[5px]">
          <GenreActionAnime />
        </div>
        <div>
          <div className="mt-[10px]">
            <Subheader title="Fantasy" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <GenreFantasyAnime />
          </div>
          <div className="mt-[10px]">
            <Subheader title="Drama" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <GenreDramaAnime />
          </div>
          <div className="mt-[10px]">
            <Subheader title="Sci-Fi" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <GenreSciFiAnime />
          </div>
          <div className="mt-[10px]">
            <Subheader title="Horror" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <GenreHorrorAnime />
          </div>
          <div className="mt-[10px]">
            <Subheader title="Romance" />
          </div>
          <div className="flex justify-around ml-[5px] mr-[5px]">
            <GenreRomanceAnime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
