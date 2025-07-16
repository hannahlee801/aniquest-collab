type AnimeCardInfo = {
  banner: string;
  title: string;
  avgRating: string;
  favoritesCount: string;
  ageRating: string;
};

const AnimeCard: React.FC<AnimeCardInfo> = ({
  banner,
  title,
  avgRating,
  favoritesCount,
  ageRating,
}) => {
  return (
    <div className="text-center mt-[10px]">
      <img
        src={banner}
        alt={title}
        className="h-[164px] w-[106px] outline outline-2 outline-maingrey-300 rounded-lg"
      />
      <p className="text-white text-decoration-line: underline underline-offset-2 text-xs mt-[5px]">
        {title}
      </p>
      <div className="flex flex-row justify-center space-x-[4px] text-sm mt-[5px]">
        <div className="flex flex-row">
          <img src="aniquestglobe.png" alt="Globe Icon" className="w-5 h-5" />
          <p className="text-white text-xs">{avgRating}</p>
        </div>
        <div className="flex flex-row">
          <img src="aniquestheart.png" alt="Heart Icon" className="w-5 h-5" />
          <p className="text-white text-xs">{favoritesCount}</p>
        </div>
        <p className="text-medorange-400 text-sm">{ageRating}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
