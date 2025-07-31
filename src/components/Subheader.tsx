type SubheaderInfo = {
  title: string;
};

const Subheader: React.FC<SubheaderInfo> = ({ title }) => {
  return (
    <div className="flex justify-between items-center bg-medorange-400 text-sm indent-8 text-maingrey-800">
      <p>{title}</p>
      <div className="p-0.75">
        <p>See All</p>
      </div>
    </div>
  );
};

export default Subheader;
