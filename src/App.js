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
      luckyWinnerIndex: null,
      inputName: "",
      isLoading: false
    };
  }

  render() {
    return (
      <div>
        <h1 id="app-title">hello random name picker</h1>
        {/* {this.state.isLoading ? console.log('loading...') : ''} */}
        <div><ul>
          {this.state.names.map((name, index) => (
            <Name
              key={index}
              name={name}
              isLucky={this.state.luckyWinnerIndex === index}
            />
          ))}
        </ul>
        <RandomButton handleClick={() => this.handleClick()} /></div>
        <InputForm
          inputName={this.state.inputName}
          handleNewName={event => this.handleNewNameChange(event)}
          handleSubmit={event => this.handleSubmit(event)}
        />
      </div>
    );
  }

  handleClick() {
    this.setState({
      isLoading: true
    });
    const randomIndex = math.randomInt(this.state.names.length);
    this.setState({
      luckyWinnerIndex: randomIndex
      // isLoading: false
    });
  }

  handleNewNameChange(event) {
    this.setState({
      inputName: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newName = this.state.inputName;
    this.setState({
      names: [...this.state.names, newName],
      inputName: ""
    });
  }
}

export default App;
