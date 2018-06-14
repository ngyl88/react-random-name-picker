import React, { Component } from "react";
import math from "mathjs";
import Name from "./Name";
import RandomButton from "./RandomButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null
    };
  }

  render() {
    return (
      <div>
        <h1 id="app-title">hello random name picker</h1>
        <ul>
          {this.state.names.map((name, index) => (
            <Name
              key={index}
              name={name}
              isLucky={this.state.luckyWinnerIndex === index}
            />
          ))}
        </ul>
        <RandomButton handleClick={() => this.handleClick()} />
        {/* <button onClick={() => this.handleClick()}>get lucky winner!</button> */}
        {/* <button onClick={this.handleClick2}>get lucky winner!</button> */}
        <div>
          <input id="new-name" type="text" />
          <button onClick={() => this.addName()}>add name</button>
        </div>
      </div>
    );
  }

  addName() {
    this.setState({
      names: [...this.state.names, "Hello"]
    });
    console.log(this);
  }

  handleClick() {
    const randomIndex = math.randomInt(this.state.names.length);
    this.setState({
      luckyWinnerIndex: randomIndex
    });
  }

  // experimental syntax
  // handleClick2 = () => {
  //   console.log('click detected on', this);
  // };
}

export default App;
