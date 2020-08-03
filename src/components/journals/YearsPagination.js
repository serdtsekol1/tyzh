import React from "react";
import "../common/css/pagination.scss";
import "./journals.scss";

function YearsPagination(props) {
  const currentHrefParams = window.location.href.split("/");
  const page = parseInt(currentHrefParams[currentHrefParams.length - 1]);
  const lastYear = parseInt(props.yearsPeriod.lastYear);
  const firstYear = parseInt(props.yearsPeriod.firstYear);
  let startIndex = page - firstYear - 1;

  if (page === firstYear) startIndex = startIndex + 1;
  else if (page == lastYear) startIndex = startIndex - 1;
  return (
    <div id="mobile-years-nav" className="years-pagination-wrap">
      <div className="years-pagination container">
        {props.arrowBack}
        {props.yearsComponents.slice(startIndex, startIndex + 3)}
        {props.arrowForward}
      </div>

      <div className="pagination-line ">
        <hr />
      </div>
    </div>
  );
}
export default YearsPagination;
