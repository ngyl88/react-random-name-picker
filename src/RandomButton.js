import React from "react";

const RandomButton = props => {
  return (
    <button id="randomButton" onClick={props.handleClick}>
      get lucky winner!
    </button>
  );
};

export default RandomButton;
