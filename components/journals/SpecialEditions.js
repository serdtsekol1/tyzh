import React from "react";
import Header from "../common/Header";
import Button from "../common/Button";

function SpecialEditions(props) {
  return (
    <div className="special-editions">
      <div className="container">
        <Header title="Спеціальні випуски" size="big" />
        <div className="row journals-list journals-list-last">
          {props.components}
          <div className="col-12" align="center">
            <Button title="Показати ще" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialEditions;
