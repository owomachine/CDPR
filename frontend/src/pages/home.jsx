import React, { useState, useEffect } from "react";

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
      <div className="welcomeText">
      <h1>Welcome to the RED Store!</h1>
      <h3>
        We heard you have been looking for some good games, guess what? WE HAVE
        EVERYTHING YOU NEED! (maybe even more!!)
      </h3>
      <h3>Here's our top picks for this month, we have a game for you no matter what you enjoy!</h3></div>
      <GameList games={games} />
    </div>
  );
}

export default HomePage;
