import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

function Fragment(props) {
  return (
    <div className={`fragment-${props.size}`}>
      {props.children}
      <div className={`fragment-${props.size}-button`}>
        {props.noShowMore ? (
          ""
        ) : (
          <Link to={props.showMoreLink}>
            <Button title="Показати ще" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Fragment;
