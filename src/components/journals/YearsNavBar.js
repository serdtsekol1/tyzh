import React from "react";
import DateSlider from "./DateSlider";
import Pagination from "../common/Pagination";
import YearsPagination from "./YearsPagination";

export default function YearsNavBar() {
  return (
    <div>
      <div className="d-none d-md-block">
        <DateSlider />
      </div>
      <div className="container">
        <div className="d-block d-md-none">
          <YearsPagination />
        </div>
      </div>
    </div>
  );
}
