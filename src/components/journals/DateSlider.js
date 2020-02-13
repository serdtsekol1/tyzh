import React from "react";

import "./journals.scss";

function DateSlider(props) {
  return (
    <div class="date-slider">
      <div className="years container">
        <ul className="year-nav">{props.yearsComponents}</ul>
      </div>
      <div className="slider">
        <div className="line">
          <hr />
        </div>
        <div className="dots-wrap container">
          <ul className="dots">{props.dotsComponents}</ul>
        </div>
      </div>
    </div>
  );
}

export default DateSlider;
