import React from "react";
import Header from "../common/Header";
import "./journals.scss";

function SpecialEditions(props) {
  return (
    <div className="special-editions">
      <div className="container">
        <Header title="Спеціальні випуски" size="big" />
        <div className="row journals-list">{props.components}</div>
      </div>
    </div>
  );
}

export default SpecialEditions;
