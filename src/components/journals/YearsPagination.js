import React from "react";
import { NavLink } from "react-router-dom";

export default function YearsPagination() {
  const activeStyle = {
    color: "#ED1B2F",
    fontSize: 32,
    width: 75
  };
  const firstYear = 2007;
  const lastYear = 2020;
  const yearsArray = Array.from(
    Array(lastYear - firstYear + 1),
    (x, index) => index + firstYear
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
  console.log(yearsComponents);
  return <p>{yearsComponents.slice(4, 7)}</p>;
}
