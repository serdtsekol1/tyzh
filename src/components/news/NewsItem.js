import React, { useState, useEffect } from "react";
import axios from 'axios';
import config from 'react-global-configuration';

import "../common/css/post.scss";
import NewsItemTemplate from "./NewsItemTemplate";

function NewsItem({ match }) {
  let [newsItem, setNewsItem] = useState({});
  useEffect (()=>{
    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/news/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        console.log(res.data);
        setNewsItem(res.data);
        })
      .catch(err => console.log(err));  
      };
      fetchData();
    
  },[match.params.id]);
  
  return (
   <NewsItemTemplate newsItem={newsItem}/>
  );
}
export default NewsItem;
