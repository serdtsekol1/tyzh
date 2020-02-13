import React from "react";
import { Route } from "react-router-dom";
import JournalsList from "./JournalsList";

import YearsNavBar from "./YearsNavBar";
function Journals() {
  return (
    <div>
      <YearsNavBar />

      <Route path={"/journals/:year"} component={JournalsList} />
    </div>
  );
}

export default Journals;
