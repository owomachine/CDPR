import React from "react";

import "../scss/game-card.scss";

// import {Row} from "react-bootstrap";
// import {Col} from "react-bootstrap";

function GameCard({ game }) {
  return (
    <div className="gameCard">
      <img className="gameCover" src={game.coverurl} />
      <div className="shortInfo">
        <span>{game.title}</span><span>{game.price}€</span>
      </div>
      
    </div>
  );
}

export default GameCard;
