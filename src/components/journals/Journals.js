import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JournalsList from "./JournalsList";
import Header from "../common/Header";

import YearsNavBar from "./YearsNavBar";
function Journals() {
  return (
    <div>
      <div className="container">
        <Header title="Журнал «Український тиждень»" size="big" />
      </div>
      <YearsNavBar />
      <div className="container">
        <div className="row">
          <Route path={"/journals/:year"} component={JournalsList} />
        </div>
      </div>
    </div>
  );
}

export default Journals;
