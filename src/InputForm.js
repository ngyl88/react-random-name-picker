import React, { Component } from "react";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      inputName: ""
    }
  }
  
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.inputName}
          onChange={event => this.handleNewNameOnChange(event)}
        />
        <button id="addButton">add name</button>
      </form>
    );
  }

  handleNewNameOnChange(event) {
    this.setState({
      inputName: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addName(this.state.inputName);
    this.setState({
      inputName: ""
    });
  }
}

export default InputForm;
