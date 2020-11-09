import React, { Component } from "react";
import { render } from "react-dom";
import Scene from "./scene";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div style={{ width: 100, height: 100, backgroundColor: "green" }}>
        <Scene />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
