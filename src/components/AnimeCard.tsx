type AnimeCardInfo = {
  id: string;
  posterImage: string;
  canonicalTitle: string;
  avgRating: string;
  favoritesCount: string;
  ageRating: string;
};

const AnimeCard: React.FC<AnimeCardInfo> = ({
  posterImage,
  canonicalTitle,
  avgRating,
  favoritesCount,
  ageRating,
}) => {
  return (
    <div className="text-center text-wrap mt-[10px] max-w-[116.6px]">
      <img
        src={posterImage}
        alt={canonicalTitle}
        className="h-[180.4px] w-[116.6px] outline-2 outline-maingrey-300 rounded-lg"
      />
      <p className="text-white text-decoration-line: underline underline-offset-2 text-[11px] mt-[5px] text-wrap">
        {canonicalTitle}
      </p>
      <div className="flex flex-row justify-around space-x-[4px] mt-[5px] ml-[3px] mr-[3px]">
        <div className="flex flex-row">
          <img
            src="../src/assets/aniquestglobe.png"
            alt="Globe Icon"
            className="w-5 h-5"
          />
          <p className="text-white text-xs">{avgRating}</p>
        </div>
        <div className="flex flex-row">
          <img
            src="../src/assets/aniquestheart.png"
            alt="Heart Icon"
            className="w-5 h-5"
          />
          <p className="text-white text-xs">{favoritesCount}</p>
        </div>
        <p className="text-medorange-400 text-sm -mt-[2px]">{ageRating}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
