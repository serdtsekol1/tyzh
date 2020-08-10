import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";

import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import ColumnTemplate from "./ColumnTemplate";


function Column({match}){
  const [loading, setLoading] = useState(false);
  let history=useHistory();
  let [columnItem, setColumnItem] = useState({});
  useEffect (()=>{
    setLoading(true);

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