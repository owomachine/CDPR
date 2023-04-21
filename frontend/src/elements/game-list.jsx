import React from "react";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import GameCard from "../elements/game-card";

import "../scss/game-list.scss"

function GameList({ games }) {
  return (
    <div className="gameList">
      <Row>
        {games.map((game) => (
          <Col lg={4} md={6} xs={12} key={game.id}>
            <GameCard game={game} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GameList;
