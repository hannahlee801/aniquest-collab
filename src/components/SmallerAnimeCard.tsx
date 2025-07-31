type SmallerAnimeCardInfo = {
  id: string;
  posterImage: string;
  canonicalTitle: string;
  avgRating: string;
  favoritesCount: string;
  ageRating: string;
};

const SmallerAnimeCard: React.FC<SmallerAnimeCardInfo> = ({
  posterImage,
  canonicalTitle,
  avgRating,
  favoritesCount,
  ageRating,
}) => {
  return (
    <div className="text-center text-wrap mt-[10px] max-w-[94.446px]">
      <img
        src={posterImage}
        alt={canonicalTitle}
        className="h-[146.124px] w-[94.446px] outline-2 outline-maingrey-300 rounded-lg"
      />
      <p className="text-white text-decoration-line: underline underline-offset-2 text-[10px] mt-[5px] text-wrap">
        {canonicalTitle}
      </p>
      <div className="flex flex-row justify-center space-x-[4px] text-xs mt-[5px]">
        <div className="flex flex-row">
          <img
            src="../src/assets/aniquestglobe.png"
            alt="Globe Icon"
            className="w-4 h-4"
          />
          <p className="text-white text-[11px]">{avgRating}</p>
        </div>
        <div className="flex flex-row">
          <img
            src="../src/assets/aniquestheart.png"
            alt="Heart Icon"
            className="w-4 h-4"
          />
          <p className="text-white text-[11px]">{favoritesCount}</p>
        </div>
        <p className="text-medorange-400 text-sm -mt-[2px]">{ageRating}</p>
      </div>
    </div>
  );
};

export default SmallerAnimeCard;
