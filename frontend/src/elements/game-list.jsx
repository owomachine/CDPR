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
    console.log(fetch("api/games"));
    const response = await fetch("api/games");
    const body = await response.json();
    console.log(body);
    this.setState({ games: body });
  }
  render() {
    const { games } = this.state;
    console.log(games);
    return (
      <div className="gameList">
              <Row>
                {games.map((game) => (
                  <Col lg={4} md={6} xs={12}>
                    <GameCard game={game} />
                  </Col>
                ))}
              </Row>
      </div>
    );
  }
}

export default GameList;
