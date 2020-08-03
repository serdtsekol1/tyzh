import React, { useState, useEffect } from "react";
import axios from 'axios';
import config from 'react-global-configuration';
import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import "../common/css/post.scss";
import NewsItemTemplate from "./NewsItemTemplate";

function NewsItem({ match }) {
  const [loading, setLoading] = useState(false);

  let [newsItem, setNewsItem] = useState({});
  useEffect (()=>{
    setLoading(true);

    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/news/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
      
        setNewsItem(res.data);
        setLoading(false);

        })
      .catch(err => console.log(err));  
      };
      fetchData();
    
  },[match.params.id]);
  
  return (
    <div>
    {loading && <SkeletonPublication/>}
       {!loading &&
   <NewsItemTemplate newsItem={newsItem}/>
       }</div>
  );
}
export default NewsItem;
