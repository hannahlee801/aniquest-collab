import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center absolute top-0 left-0 w-full space-x-[5px] p-4 bg-maingrey-600 size-[55px]">
      <nav className="flex justify-between space-x-[36px] items-center-safe pr-[10px] text-sm text-decoration-line: underline list-none ">
        <NavLink to="/" className="text-white hover:text-medorange-400">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/browse" className="text-white hover:text-medorange-400">
          <li>BROWSE</li>
        </NavLink>
        <NavLink to="/profile" className="text-white hover:text-medorange-400">
          <li>PROFILE</li>
        </NavLink>
      </nav>
      <div className="flex justify-end items-center-safe">
        <input
          type="text"
          placeholder="Search anime..."
          className="flex items-center-safe bg-maingrey-300 rounded-xl p-2 text-maingrey-800 text-sm outline-medorange-400"
        />
      </div>
    </header>
  );
};

export default Header;
