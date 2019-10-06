import React from "react";
import { render } from "react-dom";
import strategies from "../utils/obliqueStrategies.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strategies
    };
  }

  render() {
    return (
      <div>
        <text>
          {
            this.state.strategies[
              Math.floor(Math.random() * this.state.strategies.length)
            ]
          }
        </text>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
