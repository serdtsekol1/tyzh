import React, { useState, useEffect} from "react";
import axios from 'axios';
import journalsData from "../journalData";
import JournalItem from "../journals/JournalItem";
import Fragment from "./Fragment";
import config from "react-global-configuration";

function JournalsFooter() {
  const [journalsFooter, setJournalsFooter] = useState([]);
  useEffect (()=>{
    const fetchJournal= async () => {
      let today = new Date();
      const limit = 4;
      await axios.get(`${config.get("apiDomain")}/magazines/year/${today.getFullYear()}/?limit=${limit}`)
      .then(res =>{ 
    
        setJournalsFooter(res.data.results);
      })
      .catch(err => console.log(err));
     
    
     };
     fetchJournal();
  },[]);
 

  return (
    <Fragment size="big" showMoreLink="/Magazines/2020">
      <div className="row">
        {journalsFooter.map(journal => (
          <div key={journal.id - 1000} className="col-12 col-md-3">
            <JournalItem key={journal.id} journalItem={journal} />
          </div>
        ))} 
  </div>
    </Fragment>
  );
}

export default JournalsFooter;
