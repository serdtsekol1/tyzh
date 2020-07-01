import React, { useState, useEffect} from "react";
import axios from 'axios';
import JournalItem from "./JournalItem";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SpecialEditions from "./SpecialEditions";
import config from "react-global-configuration";

import "./journals.scss";

function JournalsList({ match }) {
  const [journals, setJournals] = useState([]);
  useEffect (()=>{
    const fetchJournal= async () => {
      const limit = 60;
      await axios.get(`${config.get("apiDomain")}/magazines/year/${match.params.year}/?limit=${limit}`)
      .then(res =>{ 
        console.log(res);
        setJournals(res.data.results);
      })
      .catch(err => console.log(err));
     
    
     };
     fetchJournal();
  },[match.params.year]);

  const journalsComponents = journals.map(journal => (
    <div key={journal.id - 1000} className="col-12 col-md-3">
      <JournalItem key={journal.id} journalItem={journal} />
    </div>
  ));


  const onScroll = function() {
    if (document.getElementById("journals-header")){
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("journals-header").innerHTML = "";
        document.getElementById("journals-header").style.padding = "60px 0 24px 0";
      } else {
        document.getElementById("journals-header").innerHTML = "Журнал «Український тиждень»";
        document.getElementById("journals-header").style.padding = "100px 0 16px 0";
      }
  };}

   window.addEventListener('scroll', onScroll);


  return (
    <div id="journals-list" className="journal-list-padding">
      <div className="container">
        <div className="row journals-list">
          {journalsComponents.slice(0, 8)}
          <SubscriptionBanner style={{ marginBottom: "72px" }} />
          {journalsComponents.slice(8, 16)}
          <SubscriptionBanner style={{ marginBottom: "72px" }} />
          {journalsComponents.slice(16, journalsComponents.length)}
        </div>
      </div>
      {/* <SpecialEditions components={journalsComponents.slice(16, 23)} /> */}
    </div>
  );
}
export default JournalsList;
