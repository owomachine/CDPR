import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../elements/navbar";
import GameList from "../elements/game-list";

import "../scss/search.scss";

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/games");
      const body = await response.json();
      setGames(body);
    }
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/api/games/title/${searchValue}`);
      setGames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="searchPage">
      <Navbar />
      
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        <GameList games={games} />
      </div>
  );
}

export default SearchPage;
