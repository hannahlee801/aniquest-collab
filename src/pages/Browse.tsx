import Header from "../components/Header";
import BrowseCard from "../components/BrowseCard";
import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <div className="font-anton ml-[25px] mr-[25px]">
      <Header />
      <div className="mt-[70px]">
        <h2 className="text-2xl font-extrabold text-decoration-underline: underline underline-offset-2 text-brightred-600">
          BROWSE
        </h2>
        <div className="flex flex-col text-left mt-[10px]">
          <div className="flex flex-row justify-between">
            <Link to="/shows">
              <BrowseCard banner="../src/assets/show.jpg" title="Shows" />
            </Link>
            <Link to="/movies">
              <BrowseCard banner="../src/assets/movie.jpg" title="Movies" />
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            <Link to="/decades">
              <BrowseCard banner="../src/assets/decade.jpg" title="Decades" />
            </Link>
            <Link to="/genres">
              <BrowseCard banner="../src/assets/genre.png" title="Genres" />
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            <Link to="/ovas">
              <BrowseCard banner="../src/assets/ova.png" title="OVAs" />
            </Link>
            <Link to="/airing">
              <BrowseCard banner="../src/assets/airing.webp" title="Airing" />
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            <Link to="/agerating">
              <BrowseCard
                banner="../src/assets/agerating.jpg"
                title="Age Rating"
              />
            </Link>
            <Link to="/toprated">
              <BrowseCard banner="../src/assets/studio.jpg" title="Top Rated" />
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            <Link to="/shounen">
              <BrowseCard banner="../src/assets/shounen.jpg" title="Shounen" />
            </Link>
            <Link to="/shoujo">
              <BrowseCard banner="../src/assets/shoujo2.jpg" title="Shoujo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
