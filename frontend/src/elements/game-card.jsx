import React from "react";
import { useHistory } from "react-router-dom";

import "../scss/game-card.scss";

function GameCard({ game }) {
  console.log(game);
  const history = useHistory();

  const handleDivClick = () => {
    history.push(`/games/${game.id}`);
  };

  return (
    <div className="gameCard" onClick={handleDivClick}>
      <div className="gameCard-ImgContainer">
        <img className="gameCover" src={game.coverurl} />
      </div>
      <div className="shortInfo">
        <p>{game.title}</p>
        <span>{game.price}€</span>
      </div>
    </div>
  );
}

export default GameCard;
