import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JournalsList from "./JournalsList";
import Header from "../common/Header";
import DateSlider from "./DateSlider";
import Pagination from "../common/Pagination";
function Journals() {
  return (
    <div>
      <div className="container">
        <Header title="Журнал «Український тиждень»" size="big" />
      </div>
      <div className="d-none d-md-block">
        <DateSlider />
      </div>

      <div className="container">
        <div className="d-block d-md-none">
          <Pagination />
        </div>
        <div className="row">
          <Route path={"/journals/:year"} component={JournalsList} />
        </div>
      </div>
    </div>
  );
}

export default Journals;
