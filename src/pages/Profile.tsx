import AnimeCard from "../components/AnimeCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="font-anton">
      <Header />
      <h1 className="mt-[100px] text-5xl text-center tracking-wider text-medorange-400">
        PROFILE
      </h1>
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <img
          src="../src/assets/profile-picture.jpg"
          alt="Profile Picture"
          className="h-48 w-48 outline-4 outline-medorange-400 rounded-lg drop-shadow-xl drop-shadow-black"
        />
        <div className="flex flex-col text-white text-center justify-center mt-[50px] rounded-xl outline-medorange-400 outline-3 drop-shadow-xl drop-shadow-black">
          <div className="bg-maingrey-600 pl-9 pr-9 pt-8 pb-5">
            <h2 className="text-4xl">Test User</h2>
            <p className="text-maingrey-300 text-sm">Joined July 21, 2025</p>
            <h2 className="text-medorange-400 text-xl mt-[20px]">
              Genres: Action, Romance, Comedy
            </h2>
            <div className="flex text-xs justify-center mt-[10px]">
              <p className="mr-[3px]">Reviewed </p>
              <p className="mr-[3px] text-brightred-600 underline">
                50 TV Series
              </p>
              <p className="mr-[3px]">| Reviewed</p>
              <p className="text-brightred-600 underline">8 Movies</p>
            </div>
          </div>
          <div className="leading-10 underline   bg-maingrey-300 pt-5 pb-8 pl-6 pr-6">
              <p>Username: testuser01</p>
              <p>Email: testuser@gmail.com</p>
              <p>First Name: Test</p>
              <p>Last Name: User</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-medorange-400 text-2xl indent-8 text-maingrey-800 mt-[35px] p-2">
        <p>SAVED SERIES</p>
      </div>
      <div className="flex flex-wrap mt-[10px] ml-[25px] mr-[25px] mb-[10px]">
        <Link to="/showdetails">
          <AnimeCard id="1" posterImage="inuyasha-small.jpg" canonicalTitle="InuYasha" avgRating="76.39" favoritesCount="1065" ageRating="PG" />
        </Link>
      </div>
    </div>
  );
};

export default Profile;

//   <img
//     src="edit-pen.png"
//     alt="pen"
//     className="scale-15 transform"
//   />
