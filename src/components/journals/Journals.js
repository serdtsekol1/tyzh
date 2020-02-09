import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JournalsList from "./JournalsList";
import Header from "../common/Header";
function Journals() {
  return (
    <div>
      <Header title="Журнал «Український тиждень»" size="big" />
      <ul className="navbar-nav m-auto">
        <li>
          <Link to="/journals/2019">2019</Link>
        </li>
        <li>
          <Link to="/journals/2020">2020</Link>
        </li>
      </ul>
      <div className="row">
        <Route path={"/journals/:year"} component={JournalsList} />
      </div>
    </div>
  );
}

export default Journals;
