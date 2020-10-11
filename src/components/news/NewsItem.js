import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import config from 'react-global-configuration';
import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import "../common/css/post.scss";
import NewsItemTemplate from "./NewsItemTemplate";

import {setCookie, getCookie} from "../../lib/simpleCookieLib"

function NewsItem({ match }) {
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  let [newsItem, setNewsItem] = useState({});
  useEffect (()=>{
    setLoading(true);

    const increaseStatCounter = async () => {
        let path = `/news/stats/${match.params.id}`;
        let fullUrl = `${config.get("apiDomain")}${path}`;
        if(!getCookie(`news_stats_${match.params.id}`)) {
          setCookie(`news_stats_${match.params.id}`, true, 1, fullUrl);
            await axios.put(fullUrl)
                .catch(err => console.log(err));
        }
    };
    increaseStatCounter();

    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/news/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
      
        setNewsItem(res.data);
        setLoading(false);

        })
      .catch(err =>  history.push("/page-not-found"));  
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
