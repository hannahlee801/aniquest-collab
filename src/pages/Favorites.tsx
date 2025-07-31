import Header from "../components/Header";
import AnimeCard from "../components/AnimeCard";

const Favorites = () => {
  return (
    <div className="font-anton ml-[25px] mr-[25px]">
      <Header />
      <h1 className="mt-[80px] mb-[15px] text-4xl font-extrabold text-decoration-underline: underline underline-offset-2 text-brightred-600 text-left">
        FAVORITES
      </h1>
      <div className="flex justify-between">
        <AnimeCard
          banner="80s.jpg"
          avgRating="95"
          title=""
          favoritesCount="69"
          ageRating="PG"
        />
        <AnimeCard
          banner="80s.jpg"
          avgRating="95"
          title=""
          favoritesCount="69"
          ageRating="PG"
        />
        <AnimeCard
          banner="80s.jpg"
          avgRating="95"
          title=""
          favoritesCount="69"
          ageRating="PG"
        />
      </div>
      <div className="flex justify-between mt-[10px]">
        <AnimeCard
          banner="80s.jpg"
          avgRating="95"
          title=""
          favoritesCount="69"
          ageRating="PG"
        />
      </div>
    </div>
  );
};

export default Favorites;
