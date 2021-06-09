import React from "react";
import { useHistory } from "react-router-dom";

import { Route } from "react-router-dom";
import JournalsList from "./JournalsList";

import YearsNavBar from "./YearsNavBar";

function Journals() {
  let history = useHistory();
  let currentHrefParams = window.location.href.split("/");
  if (currentHrefParams[currentHrefParams.length - 1] == "") {
    const year = new Date().getFullYear();
    history.push(`/Magazines/${year}`);
  }
  return (
    <div>

   
      <YearsNavBar/>
      <Route path={"/Magazines/:year"} component={JournalsList} />
    </div>
  );
}

export default Journals;
