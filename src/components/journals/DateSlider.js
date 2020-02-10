import React from "react";

import "./journals.scss";

function DateSlider(props) {
  return (
    <div>
      <div className="years container">
        <ul className="year-nav">{props.yearsComponents}</ul>
      </div>
      <div className="slider">
        <div className="line">
          <hr />
        </div>
        <div className="dots-wrap container">
          <ul className="dots">{props.dotsComponent}</ul>
        </div>
      </div>
    </div>
  );
}

export default DateSlider;
