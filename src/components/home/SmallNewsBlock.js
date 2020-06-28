import React,{useEffect, useState} from "react";

import SmallNewsBlockItem from "./SmallNewsBlockItem";
import Header from "../common/Header";
import Fragment from "../fragments/Fragment";
import axios from 'axios';
import config from "react-global-configuration";

function SmallNewsBlock() {
  const [news, setNews] = useState([]);
  useEffect (()=>{
    const fetchNews= async () => {
      let limit = 4;
      await axios.get(`${config.get("apiDomain")}/news/?limit=${limit}`)
      .then(res =>{ 
        setNews(res.data.results);
      })
      .catch(err => console.log(err));
     };
     fetchNews();
  },[]);

  
  const newsComponents = news
    .slice(0, 4)
    .map(news => <SmallNewsBlockItem key={news.id} newsItem={news} />);

  return (
    <Fragment size="medium" showMoreLink="/news">
      <Header title="Новини" size="small" />
      {newsComponents}
    </Fragment>
  );
}

export default SmallNewsBlock;
