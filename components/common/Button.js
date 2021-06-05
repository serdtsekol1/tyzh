import React from "react";

function Button(props) {
  return (
    <button className={props.redButton ? "button-red" : "button-default"}>
      {props.title}
    </button>
  );
}
export default Button;
