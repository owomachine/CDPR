import React, { Component } from "react";

import Navbar from "../elements/navbar";
import GameList from "../elements/game-list";

class HomePage extends Component {
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
    return (
      <div>
        <Navbar />
        <h1>AAAAAAAA</h1>
        <GameList />
      </div>
    );
  }
}

export default HomePage;
