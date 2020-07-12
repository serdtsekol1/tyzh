import React,{useState, useEffect} from 'react';
import axios from 'axios';
import config from 'react-global-configuration';
import JournalTemplate from './JournalTemplate';
import SkeletonPublication from "../loading_skeletons/SkeletonPublication";


function Journal({match}) {
    let [journalItem, setJournalItem] = useState({});
  const [loading, setLoading] = useState(false);

    useEffect (()=>{
      setLoading(true);

      const fetchData = async () => {
        
        let apiUrl = `${config.get("apiDomain")}/magazines/${match.params.id}`;
        await axios.get(apiUrl)
        .then(res =>{ 
          console.log(res.data);
          setJournalItem(res.data);
          setLoading(false);

          })
        .catch(err => console.log(err));  
        };
        fetchData();
      
    },[match.params.id]);
    return (
    <div>
    {loading && <SkeletonPublication article={true}/>}
    {!loading &&<JournalTemplate journalItem={journalItem}/>}</div>)

}

export default Journal;