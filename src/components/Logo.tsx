const Logo = () => {
  return (
    <div className="flex flex-col justify-center mt-10 items-center bg-maingrey-600 drop-shadow-black drop-shadow-md h-[170px] mt-[82px] ">
      <img
        src="../src/assets/aniquest-logo.png"
        alt="Logo"
        className="flex justify-center items-center-safe w-[327px] h-[121.5px]"
      />
      <p className="flex flex-row justify-end items-end text-white">
        The New Age Anime Database
      </p>
    </div>
  );
};

export default Logo;
