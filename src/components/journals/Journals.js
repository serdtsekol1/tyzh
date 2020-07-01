import React from "react";
import { useHistory } from "react-router-dom";

import { Route } from "react-router-dom";
import JournalsList from "./JournalsList";

import YearsNavBar from "./YearsNavBar";
function Journals() {
  let history = useHistory();
  let currentHrefParams = window.location.href.split("/");
  if (currentHrefParams[currentHrefParams.length - 1] == "") {
    history.push(`/journals/2020`);
  }
  return (
    <div>
      <YearsNavBar/>
      <Route path={"/journals/:year"} component={JournalsList} />
    </div>
  );
}

export default Journals;
