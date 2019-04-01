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
    // TODO: using react state, shuffle .box's to
    // new positions within .box-container and update
    // labels

    let redBox = this.state.redBox;
    redBox.top = Math.floor(Math.random() * 300);
    redBox.left = Math.floor(Math.random() * 300);

    this.setState({ redBox });

    let blueBox = this.state.blueBox;
    blueBox.top = Math.floor(Math.random() * 300);
    blueBox.left = Math.floor(Math.random() * 300);

    this.setState({ blueBox });
  };

  render() {
    return (
      <div className="container">
        <div className="box-container">
          <div className="box red">
            <span className="box-label">
              left: {this.state.redBox.left} top: {this.state.redBox.top}
            </span>
          </div>
          <div className="box blue">
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
