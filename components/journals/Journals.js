import React from "react";
import { useHistory } from "react-router-dom";

import { Route } from "react-router-dom";
import JournalsList from "./JournalsList";

import YearsNavBar from "./YearsNavBar";
import MetaTags from "../common/MetaTagsComponent";

function Journals() {
  let history = useHistory();
  let currentHrefParams = window.location.href.split("/");
  if (currentHrefParams[currentHrefParams.length - 1] == "") {
    const year = new Date().getFullYear();
    history.push(`/Magazines/${year}`);
  }
  return (
    <div>

    <MetaTags title={"Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн"} 
          abstract={"Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн"}
          ct100={true} keywords={"Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн"}
          />
      <YearsNavBar/>
      <Route path={"/Magazines/:year"} component={JournalsList} />
    </div>
  );
}

export default Journals;
