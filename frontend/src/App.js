import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    games: []
  };

  async componentDidMount() {
    console.log(fetch('api/allgames'));
    const response = await fetch('api/allgames');
    const body = await response.json();
    console.log(body);
    this.setState({games: body});
  }

  render() {
    const {games} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Clients</h2>
              {games.map(game =>
                  <div key={game.id}>
                    {game.title}
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;