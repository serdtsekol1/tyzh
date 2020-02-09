import React, { useEffect, useState } from "react";
import "./css/pagination.scss";
import { NavLink } from "react-router-dom";

function Pagination() {
  const currentYear = 2020;
  const firstYear = 2007;
  const [page, setPage] = useState(currentYear);

  return (
    <div className="pagination">
      <NavLink
        onClick={() => {
          if (page - 2 !== firstYear) setPage(page - 1);
        }}
        to={`/journals/${page - 2}`}
      >
        <img src={require("../../images/icons/arrow_back-32px.svg")} alt="" />
      </NavLink>
      <NavLink
        onClick={() => {
          if (page - 2 !== firstYear) setPage(page - 1);
          setPage(page - 2);
        }}
        to={`/journals/${page - 2}`}
      >
        {page - 2}
      </NavLink>
      <NavLink to={`/journals/${page - 1}`}>{page - 1}</NavLink>
      <NavLink
        onClick={() => {
          if (page < currentYear) setPage(page + 1);
          setPage(page + 1);
        }}
        to={`/journals/${page}`}
      >
        {page}
      </NavLink>
      <NavLink
        onClick={() => {
          if (page < currentYear) setPage(page + 1);
        }}
        to={`/journals/${page}`}
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
