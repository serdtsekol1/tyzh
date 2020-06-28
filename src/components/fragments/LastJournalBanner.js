import React, { useState, useEffect} from "react";
import axios from 'axios';
import JournalItem from "../journals/JournalItem";
import Fragment from "./Fragment";
import Header from "../common/Header";
import config from "react-global-configuration";

function LastJournalBanner() {
  const [journals, setJournals] = useState([]);
  useEffect (()=>{
    const fetchJournal= async () => {
      let today = new Date();
      await axios.get(`${config.get("apiDomain")}/magazines/year/${today.getFullYear()-1}/?limit=1`)
      .then(res =>{ 
        console.log(res);
        setJournals(res.data.results);
      })
      .catch(err => console.log(err));
     
     };
     fetchJournal();
  },[]);

  
  const journalComponent =  journals.map( journal => <JournalItem journalItem={journal}/>);


 
  
  return (
    <div className="fragment-medium">
      <Header size="small" title="Останній номер" />
      {journalComponent}
    </div>
  );
}

export default LastJournalBanner;
