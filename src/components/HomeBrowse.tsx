import BrowseCard from "./BrowseCard";
import { Link } from "react-router-dom";

const HomeBrowse = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="flex flex-row justify-between">
        <Link to="/shows">
          <BrowseCard banner="../src/assets/show.jpg" title="Shows" />
        </Link>
        <Link to="/movies">
          <BrowseCard banner="../src/assets/movie.jpg" title="Movies" />
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <Link to="decades">
          <BrowseCard banner="../src/assets/decade.jpg" title="Decades" />
        </Link>
        <Link to="genres">
          <BrowseCard banner="../src/assets/genre.png" title="Genres" />
        </Link>
      </div>
    </div>
  );
};

export default HomeBrowse;
