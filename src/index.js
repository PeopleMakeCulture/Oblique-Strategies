import React from "react";
import { render } from "react-dom";
import strategies from "../utils/obliqueStrategies.js";

class App extends React.Component {

  state = {
    strategy: ""
  };
  
  //TO DO: modify to call OS API instead of hard coded strategies
  async componentDidMount(){
    const strategy = strategies[
              Math.floor(Math.random() * strategies.length)
            ]
    await this.setState({strategy})
  }

  render() {
    return (
      <div>
        <text>
          {
            this.state.strategy
          }
        </text>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
