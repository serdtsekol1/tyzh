import React from "react";
import "./css/_buttons.scss";

function Button(props) {
  return (
    <button className={props.redButton ? "button-red" : "button-default"}>
      {props.title}
    </button>
  );
}
export default Button;
