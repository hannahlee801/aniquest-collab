import "./index.css";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import Shows from "./pages/Shows";
import Movies from "./pages/Movies";
import Decades from "./pages/Decades";
import Genres from "./pages/Genres";
import Favorites from "./pages/Favorites";
import OVAs from "./pages/OVAs";
import Airing from "./pages/Airing";
import AgeRating from "./pages/AgeRating";
import Popular from "./pages/Popular";
import Shounen from "./pages/Shounen";
import Shoujo from "./pages/Shoujo";
import ShowDetails from "./pages/ShowDetails";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/decades" element={<Decades />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/ovas" element={<OVAs />} />
            <Route path="/airing" element={<Airing />} />
            <Route path="/agerating" element={<AgeRating />} />
            <Route path="/toprated" element={<Popular />} />
            <Route path="/shounen" element={<Shounen />} />
            <Route path="/shoujo" element={<Shoujo />} />
            <Route path="/showdetails" element={<ShowDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

export default App;
