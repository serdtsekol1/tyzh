import React,{useState, useEffect} from 'react';
import axios from 'axios';
import config from 'react-global-configuration';
import JournalTemplate from './JournalTemplate';

function Journal({match}) {
    let [journalItem, setJournalItem] = useState({});
    useEffect (()=>{
      const fetchData = async () => {
        
        let apiUrl = `${config.get("apiDomain")}/magazines/${match.params.id}`;
        await axios.get(apiUrl)
        .then(res =>{ 
          console.log(res.data);
          setJournalItem(res.data);
          })
        .catch(err => console.log(err));  
        };
        fetchData();
      
    },[match.params.id]);
    return <JournalTemplate journalItem={journalItem}/>

}

export default Journal;