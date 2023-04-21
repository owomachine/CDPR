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
    <div className="gamePage">
      <Navbar />
      <div className="gameWrapper">
        <Row>
          <Col sm={6} xs={12}>
            <img src={game.coverurl} />
          </Col>
          <Col sm={6} xs={12}>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <h3>%{game.rating} Positive</h3>
            <h2>{game.price}€</h2>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GamePage;
