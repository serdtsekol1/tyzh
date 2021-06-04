import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";

import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import ColumnTemplate from "./ColumnTemplate";

import {setCookie, getCookie} from "../../lib/simpleCookieLib"


function Column({match}){
  const [loading, setLoading] = useState(false);
  let history=useHistory();
  let [columnItem, setColumnItem] = useState({});
  useEffect (()=>{
    setLoading(true);
      
    const increaseStatCounter = async () => {
        let path = `/columns/stats/${match.params.id}`;
        let fullUrl = `${config.get("apiDomain")}${path}`;
        if(!getCookie(`columns_stats_${match.params.id}`)) {
            setCookie(`columns_stats_${match.params.id}`, true, 1, fullUrl);
            await axios.put(fullUrl)
                .catch(err => console.log(err));
        }
    };
    increaseStatCounter();

    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/columns/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
     
        setColumnItem(res.data);
        setLoading(false);

        })
      .catch(err =>  history.push("/page-not-found"));  
      };
      fetchData();
    
  },[match.params.id]);
    return (
      <div>
      {loading && <SkeletonPublication article={true}/>}
         {!loading &&
      <ColumnTemplate columnItem ={columnItem}/>
         }</div>
      );
    
}

export default Column;