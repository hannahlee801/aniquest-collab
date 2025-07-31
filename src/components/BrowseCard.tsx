type BrowseCardProps = {
  banner: string;
  title: string;
};

const BrowseCard: React.FC<BrowseCardProps> = ({ banner, title }) => {
  return (
    <div className="flex flex-col mb-[15px] mt-[5px]">
      <div className="w-[186px] h-[123px]">
        <img src={banner} alt={title} className="object-cover w-full h-full" />
      </div>
      <h2 className="text-white text-base mt-[5px]">{title}</h2>
    </div>
  );
};

export default BrowseCard;
