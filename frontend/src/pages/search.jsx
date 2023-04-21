import React, { useState } from "react";
import axios from "axios";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

import Navbar from "../elements/navbar";
import GameCard from "../elements/game-card";

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

  const gameCards = games.map((game) => (
    <Col xs={4}>
      <GameCard key={game.id} game={game} />
    </Col>
  ));

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      <Row>{gameCards}</Row>
    </div>
  );
}

export default SearchPage;
