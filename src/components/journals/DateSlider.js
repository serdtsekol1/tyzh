import React from "react";
import { NavLink } from "react-router-dom";
import "./journals.scss";

export default function DateSlider() {
  const activeStyle = {
    color: "#ED1B2F",
    fontSize: 32,
    width: 75
  };
  const startYear = 2007;
  const currentYear = 2020;
  const yearsArray = Array.from(
    Array(currentYear - startYear + 1),
    (x, index) => index + startYear
  );
  const yearsComponents = yearsArray.map(year => (
    <li key={year}>
      <NavLink
        activeStyle={activeStyle}
        className="year-link"
        key={year * 2}
        to={`/journals/${year}`}
      >
        {year}
      </NavLink>
    </li>
  ));
  const dotsComponent = yearsArray.map(year => (
    <li key={year}>
      <NavLink
        activeStyle={activeStyle}
        className="dot"
        key={year * 2}
        to={`/journals/${year}`}
      >
        {`  ▪  `}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <div class="years container">
        <ul className="year-nav">{yearsComponents}</ul>
      </div>
      <div class="slider">
        <div class="line">
          <hr />
        </div>
        <div class="dots-wrap container">
          <ul className="dots">{dotsComponent}</ul>
        </div>
      </div>
    </div>
  );
}
