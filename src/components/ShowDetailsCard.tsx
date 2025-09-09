type ShowDetailProps = {
  posterImage: string;
  canonicalTitle: string;
  averageRating: string;
  favoritesCount: string;
  ageRating: string;
  episodeCount: number;
  episodeLength: number;
  synopsis: string;
};

const ShowDetailsCard: React.FC<ShowDetailProps> = ({ posterImage, canonicalTitle, averageRating, favoritesCount, ageRating, episodeCount, episodeLength, synopsis }) => {
  return (
    <div className="font-anton">
      <div className="flex flex-col justify-center items-center">
        <img
          src={posterImage}
          alt={canonicalTitle}
          className="mt-[100px] outline-3 outline-maingrey-300 rounded-lg w-[221.65px] h-[322.3px] mb-[20px]"
        />
        <h1 className="text-white text-3xl">{canonicalTitle}</h1>
        <div className="flex">
          <div>
            <img
              src="../src/assets/aniquestglobe.png"
              alt="Globe Icon"
              className="w-6 h-6"
            />
            <p className="">{averageRating}</p>
          </div>
          <div>
            <img src="../src/assets/aniquestheart.png" alt="Heart Icon" className="w-6 h-6" />
            <p className="">{favoritesCount}</p>
          </div>
          <p className="">{ageRating}</p>
          <p className="">{episodeCount}</p>
          <p className="">{episodeLength}</p>
        </div>
        <div className="text-white">
          <p>Description:</p>
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsCard;