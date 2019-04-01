import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  shuffle() {
    // TODO: using react state, shuffle .box's to
    // new positions within .box-container and update
    // labels
  }
  render() {
    return (
      <div className="container">
        <div className="box-container">
          <div className="box red">
            <span className="box-label">left: 0 top: 0</span>
          </div>
          <div className="box blue">
            <span className="box-label">left: 0 top: 0</span>
          </div>
        </div>
        <button className="button shuffle" onClick={this.shuffle}>
          Shuffle!
        </button>
      </div>
    );
  }
}

export default App;
