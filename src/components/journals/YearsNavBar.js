import React, { useState } from "react";
import DateSlider from "./DateSlider";

import YearsPagination from "./YearsPagination";
import { yearsLinks } from "./YearsLinks";
import { NavLink } from "react-router-dom";

function YearsNavBar() {
  // const yearsPeriod = {
  //   firstYear: 2007,
  //   lastYear: 2020
  // };
  const firstYear = 2007;
  const lastYear = 2020;
  const [page, setPage] = useState(lastYear);
  const activeStyle = {
    color: "#ED1B2F",
    fontSize: 32,
    width: 75
  };
  const yearsArray = Array.from(
    Array(lastYear - firstYear + 1),
    (x, index) => index + firstYear
  );
  const yearsComponents = yearsArray.map(year => (
    <li key={year}>
      <NavLink
        onClick={() => {
          setPage(currentPage => (currentPage = year));
        }}
        activeStyle={activeStyle}
        className="year-link"
        key={year * 2}
        to={`/journals/${year}`}
      >
        {year}
      </NavLink>
    </li>
  ));
  const dotsComponents = yearsArray.map(year => (
    <li key={year}>
      <NavLink
        activeStyle={activeStyle}
        className="dot"
        key={year * 6}
        to={`/journals/${year}`}
      >
        {`  ▪  `}
      </NavLink>
    </li>
  ));

  //const [yearsComponents, dotsComponents] = yearsLinks(yearsPeriod, setPage);
  console.log([yearsComponents, dotsComponents]);
  return (
    <div>
      <div className="d-none d-md-block">
        <DateSlider
          dotsComponents={dotsComponents}
          yearsComponents={yearsComponents}
          page={page}
          setPage={setPage}
        />
      </div>
      <div className="container">
        <div className="d-block d-md-none">
          <YearsPagination
            yearsComponents={yearsComponents}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default YearsNavBar;
