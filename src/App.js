import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    redBox: {
      top: 0,
      left: 0
    },
    blueBox: {
      top: 0,
      left: 0
    }
  };

  shuffle = () => {
    let redBox = this.state.redBox;
    redBox.top = Math.floor(Math.random() * 250);
    redBox.left = Math.floor(Math.random() * 250);

    this.setState({ redBox });

    let blueBox = this.state.blueBox;
    blueBox.top = Math.floor(Math.random() * 250);
    blueBox.left = Math.floor(Math.random() * 250);

    this.setState({ blueBox });
  };

  render() {
    return (
      <div className="container">
        <div className="box-container">
          <div
            className="box red"
            style={{
              left: this.state.redBox.left,
              top: this.state.redBox.top
            }}
          >
            <span className="box-label">
              left: {this.state.redBox.left} top: {this.state.redBox.top}
            </span>
          </div>
          <div
            className="box blue"
            style={{
              left: this.state.blueBox.left,
              top: this.state.blueBox.top
            }}
          >
            <span className="box-label">
              left: {this.state.blueBox.left} top: {this.state.blueBox.top}
            </span>
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
