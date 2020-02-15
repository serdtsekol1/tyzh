import React from "react";
import { Route } from "react-router-dom";
import JournalsList from "./JournalsList";

import YearsNavBar from "./YearsNavBar";
function Journals() {
  let currentHrefParams = window.location.href.split("/");
  if (currentHrefParams[currentHrefParams.length - 1] == "") {
    currentHrefParams.pop();
    currentHrefParams.push("2020");
    const redirectionLink = currentHrefParams.join("/");
    window.location.replace(redirectionLink);
  }
  return (
    <div>
      <YearsNavBar />

      <Route path={"/journals/:year"} component={JournalsList} />
    </div>
  );
}

export default Journals;
