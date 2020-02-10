import React, { useEffect, useState } from "react";
import "./css/pagination.scss";
import { NavLink } from "react-router-dom";

function Pagination(props) {
  const activeStyle = {
    color: "#ED1B2F",
    fontSize: 32,
    width: 75
  };
  const lastYear = 2020;
  const firstYear = 2007;
  const [page, setPage] = useState(() =>
    props.currentYear ? parseInt(props.currentYear) : lastYear
  );

  const [specialCase, setSpecialCase] = useState(-1);
  const handlePageChange = (currentPage, moveForward) => {
    if (moveForward && currentPage !== lastYear) {
      setPage(currentPage => currentPage + 1);
    } else if (!moveForward && currentPage !== firstYear) {
      setPage(currentPage => currentPage - 1);
    }
    if (currentPage == lastYear) setSpecialCase(-1);
    else if (currentPage == firstYear) setSpecialCase(1);
    else setSpecialCase(0);
  };
  return (
    <div className="pagination">
      <NavLink
        activeStyle={activeStyle}
        onClick={() => handlePageChange(page, false)}
        to={`/journals/${page - 1 + specialCase}`}
      >
        <img src={require("../../images/icons/arrow_back-32px.svg")} alt="" />
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        onClick={() => handlePageChange(page, false)}
        to={`/journals/${page - 1 + specialCase}`}
      >
        {page - 1 + specialCase}
      </NavLink>
      <NavLink activeStyle={activeStyle} to={`/journals/${page + specialCase}`}>
        {page + specialCase}
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        onClick={() => handlePageChange(page, true)}
        to={`/journals/${page + 1 + specialCase}`}
      >
        {page + 1 + specialCase}
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        onClick={() => handlePageChange(page, true)}
        to={`/journals/${page + 1 + specialCase}`}
      >
        <img
          src={require("../../images/icons/arrow_forward-32px.svg")}
          alt=""
        />
      </NavLink>
    </div>
  );
}

export default Pagination;
