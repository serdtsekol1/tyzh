import React from "react";
import { useRouter } from 'next/router';

function YearsPagination(props) {
  const router = useRouter();
  
  const page = parseInt(router.query.year);
  console.log(router.pathname.split("/"));
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
