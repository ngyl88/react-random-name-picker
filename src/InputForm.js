import React from "react";

const InputForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      value={props.inputName}
      onChange={props.handleNewName}
    />
    <button id="addButton">add name</button>
  </form>
);

export default InputForm;
