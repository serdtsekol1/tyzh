import React from "react";
import Button from "../common/Button";

function Fragment(props) {
  return (
    <div className={`fragment-${props.size}`}>
      {props.children}
      <div className={`fragment-${props.size}-button`}>
        <Button title="Показати ще" />
      </div>
    </div>
  );
}

export default Fragment;
