import React, {useState, useEffect} from "react";

import Navbar from "../elements/navbar";
import SearchBar from "../elements/search-bar";
import GameList from "../elements/game-list";

import "../scss/home.scss";

function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/games");
      const body = await response.json();
      setGames(body);
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <SearchBar />
      <h1>AAAAAAAA</h1>
      <GameList games={games} />
    </div>
  );
}

export default HomePage;
