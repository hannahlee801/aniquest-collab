const Header = () => {
  return (
    <header className="flex justify-between items-center absolute top-0 left-0 w-full space-x-[5px] p-4 bg-maingrey-600 text-white size-[45px]">
      <nav className="flex justify-between space-x-[18px] items-center-safe pr-[10px] text-xs text-decoration-line: underline">
        <p className="">HOME</p>
        <p className="">BROWSE</p>
        <p className="">PROFILE</p>
        <p className="">FAVORITES</p>
      </nav>
      <div className="flex justify-end items-center-safe">
        <input
          type="text"
          placeholder="Search anime..."
          className="flex items-center-safe bg-maingrey-300 rounded-xl p-2 text-maingrey-800 text-sm"
        />
      </div>
    </header>
  );
};

export default Header;
