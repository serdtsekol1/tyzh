import React from "react";
import "../common/css/pagination.scss";

function YearsPagination(props) {
  console.log(props.page);
  return (
    <div className="pagination">
      {props.yearsComponents.slice(
        props.page - 2007 - 1,
        props.page - 2007 - 1 + 3
      )}
    </div>
  );
}
export default YearsPagination;
