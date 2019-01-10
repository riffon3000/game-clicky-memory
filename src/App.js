import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game"

class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="header">
          <h1>Clicky! Game</h1>
          <h2>Click on an image to earn points, but don't click the same one more than once!</h2>
        </header>

        <div className="container">
          <Game />
        </div>

      </div>
    );
  }
}

export default App;
