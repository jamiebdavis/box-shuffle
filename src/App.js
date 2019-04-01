import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    top: 0,
    left: 0
  };

  shuffle = () => {
    // TODO: using react state, shuffle .box's to
    // new positions within .box-container and update
    // labels
    let topPosition = this.state.top;
    topPosition = Math.random() * 300;

    this.setState({ top: topPosition.toFixed() });
    console.log("Top: " + this.state.top);

    let leftPosition = this.state.left;

    leftPosition = Math.random() * 300;

    this.setState({ left: leftPosition.toFixed() });
    console.log("Left: " + this.state.left);
  };

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
