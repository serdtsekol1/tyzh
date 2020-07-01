import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";

import Header from "../common/Header";
import ColumnsBlock from "../fragments/ColumsBlock";
import AuthorsBlock from "../fragments/AuthorsBlock";
import BannersPanel from "../fragments/BannersPanel";

import ColumnTemplate from "./ColumnTemplate";


function Column({match}){
  let [columnItem, setColumnItem] = useState({});
  useEffect (()=>{
    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/columns/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        console.log(res.data);
        setColumnItem(res.data);
        })
      .catch(err => console.log(err));  
      };
      fetchData();
    
  },[match.params.id]);
    return (
      <ColumnTemplate columnItem ={columnItem}/>
      );
    
}

export default Column;