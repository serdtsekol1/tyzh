import React,{useEffect, useState} from "react";

import SmallNewsBlockItem from "./SmallNewsBlockItem";
import SkeletonNewsBlock from "../loading_skeletons/SkeletonNewsBlock";
import Header from "../common/Header";
import Fragment from "../fragments/Fragment";
import axios from 'axios';
import config from "react-global-configuration";

function SmallNewsBlock() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (()=>{
    setLoading(true);
    const fetchNews= async () => {
      let limit = 4;
      await axios.get(`${config.get("apiDomain")}/news/?limit=${limit}`)
      .then(res =>{ 
        setNews(res.data.results);
        setLoading(false);
      })
      .catch(err => console.log(err));
     };
     fetchNews();
  },[]);

  
  const newsComponents = news
    .slice(0, 4)
    .map(news => <SmallNewsBlockItem key={news.id} newsItem={news} />);

  return (
    <div>
    {loading && <SkeletonNewsBlock quantity = {4} size="small"/>}
        {!loading &&
    <Fragment size="medium" showMoreLink="/news">
      
      <Header title="Новини" size="small" />
      {newsComponents}
    </Fragment>
        }
        </div>
  );
}

export default SmallNewsBlock;
