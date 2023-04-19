import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../elements/navbar";
import "../scss/game.scss";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function GamePage() {
  const { gameId } = useParams();
  console.log(gameId);
  const [game, setGame] = useState({});
  useEffect(() => {
    fetch(`/api/games/${gameId}`)
      .then((response) => response.json())
      .then((response) => setGame(response));
  }, [gameId]);

  return (
    <div>
      <Navbar />
      <div className="gameWrapper">
        <Row>
          <Col xs={6}>
            <img src={game.coverurl} />
          </Col>
          <Col xs={6}>
            <h1>{game.title}</h1>
            <h3>{game.description}</h3>
            <h3>%{game.rating} Positive</h3>
            <h2>{game.price}€</h2>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GamePage;
