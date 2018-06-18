import React, { Component } from "react";
import math from "mathjs";
import Name from "./Name";
import RandomButton from "./RandomButton";
import InputForm from "./InputForm";

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
        <div>
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
        </div>
        <InputForm
          addName={name => this.addNewName(name)}
        />
      </div>
    );
  }

  handleClick() {
    const randomIndex = math.randomInt(this.state.names.length);
    this.setState({
      luckyWinnerIndex: randomIndex
    });
  }

  addNewName(newName) {
    this.setState({
      names: [...this.state.names, newName]
    });
  }
}

export default App;
