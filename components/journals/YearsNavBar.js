import React, { useState, useEffect } from "react";
import DateSlider from "./DateSlider";
import Header from "../common/Header";
import YearsPagination from "./YearsPagination";
import NavLink from "../common/NavLink";

function YearsNavBar() {
  const firstYear = 2007;
  const lastYear = new Date().getFullYear();
  const [page, setPage] = useState(lastYear);
  const activeStyle = {
    color: "#ED1B2F",
    fontSize: 32,
    width: 75
  };
  const activeStylePagination = {
    color: "#ED1B2F",
    fontSize: 20
  };
  const yearsArray = Array.from(
    Array(lastYear - firstYear + 1),
    (x, index) => index + firstYear
  );
  const yearsComponents = isSmall => {
    return yearsArray.map(year => (
      <li key={year}>
        <NavLink
          onClick={() => {
            setPage(currentPage => (currentPage = year));
          }}
          activeStyle={isSmall ? activeStylePagination : activeStyle}
          className="year-link"
          key={year * 2}
          to={`/Magazines/${year}`}
        >
          {year}
        </NavLink>
      </li>
    ));
  };

  const dotsComponents = yearsArray.map(year => (
    <li key={year}>
      <NavLink
        activeStyle={activeStyle}
        className="dot"
        key={year * 6}
        to={`/Magazines/${year}`}
      >
        {`  ▪  `}
      </NavLink>
    </li>
  ));
  const arrowBack = (
    <NavLink
      className={page !== firstYear ? "arrow-active" : "arrow-disable"}
      to={`/Magazines/${page === firstYear ? page : page - 1}`}
      onClick={() => {
        if (page !== firstYear)
          setPage(currentPage => (currentPage = currentPage - 1));
      }}
    >
      <img src={"/images/icons/arrow_back-32px.svg"} alt="" />
    </NavLink>
  );
  const arrowForward = (
    <NavLink
      className={page !== lastYear ? "arrow-active" : "arrow-disable"}
      to={`/Magazines/${page === lastYear ? page : page + 1}`}
      onClick={() => {
        if (page !== lastYear)
          setPage(currentPage => (currentPage = currentPage + 1));
      }}
    >
      <img src={"/images/icons/arrow_forward-32px.svg"} alt="" />
    </NavLink>
  );

  return (
    <div className="jounals-container">
      <div className="container jounals ">
        <div id="hide"/>
        <Header id="journals-header" title="Журнал «Український тиждень»" size="big" />
      </div>
      <div className="d-none d-md-block">
        <DateSlider
          dotsComponents={dotsComponents}
          yearsComponents={yearsComponents(false)}
          page={page}
        />
      </div>

      <div className="d-block d-md-none">
        <YearsPagination
          arrowForward={arrowForward}
          arrowBack={arrowBack}
          yearsComponents={yearsComponents(true)}
          page={page}
          yearsPeriod={{ firstYear: firstYear, lastYear: lastYear }}
        />
      </div>
    </div>
  );
}

export default YearsNavBar;
