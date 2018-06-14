import React from "react";

const RandomButton = props => {
  return <button onClick={props.handleClick}>get lucky winner!</button>;
//   return <button onClick={() => props.handleClick()}>get lucky winner!</button>;
};

export default RandomButton;
