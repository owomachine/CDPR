import React, { useState } from "react";
import axios from "axios";

import Navbar from "../elements/navbar";
import GameList from "../elements/game-list";

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [games, setGames] = useState([]);

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
    <div>
      <Navbar />
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      <GameList games={games}/>
    </div>
  );
}

export default SearchPage;
