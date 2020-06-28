import React, { useState, useEffect} from "react";
import axios from 'axios';
import JournalItem from "./JournalItem";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SpecialEditions from "./SpecialEditions";
import config from "react-global-configuration";

function JournalsList({ match }) {
  const [journals, setJournals] = useState([]);
  useEffect (()=>{
    const fetchJournal= async () => {
      const limit = 24;
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
  return (
    <div>
      <div className="container">
        <div className="row journals-list">
          {journalsComponents.slice(0, 8)}
          <SubscriptionBanner style={{ marginBottom: "72px" }} />
          {journalsComponents.slice(8, 16)}
          <SubscriptionBanner style={{ marginBottom: "72px" }} />
          {journalsComponents.slice(16, 24)}
        </div>
      </div>
      <SpecialEditions components={journalsComponents.slice(16, 23)} />
    </div>
  );
}
export default JournalsList;
