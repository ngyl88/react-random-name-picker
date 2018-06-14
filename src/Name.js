import React from "react";

const Name = props => {
  return <li className={props.isLucky? 'lucky' : ''}>{props.name}</li>;
};

export default Name;
