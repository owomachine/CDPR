import React, { Component } from "react";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import GameCard from "../elements/game-card";

import "../scss/game-list.scss"

class GameList extends Component {
  state = {
    games: [],
  };

  async componentDidMount() {
    console.log(fetch("api/allgames"));
    const response = await fetch("api/allgames");
    const body = await response.json();
    console.log(body);
    this.setState({ games: body });
  }
  render() {
    const { games } = this.state;
    return (
      <div className="gameList">
              <Row>
                {games.map((game) => (
                  <Col xs={4}>
                    <GameCard game={game} />
                  </Col>
                ))}
              </Row>
      </div>
    );
  }
}

export default GameList;
