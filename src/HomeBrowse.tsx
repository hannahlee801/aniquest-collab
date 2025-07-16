import BrowseCard from "./BrowseCard";

const HomeBrowse = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <BrowseCard banner="show.jpg" title="Shows" />
        <BrowseCard banner="movie.jpg" title="Movies" />
      </div>
      <div className="flex flex-row justify-between">
        <BrowseCard banner="decade.jpg" title="Decades" />
        <BrowseCard banner="genre.png" title="Genres" />
      </div>
    </div>
  );
};

export default HomeBrowse;
