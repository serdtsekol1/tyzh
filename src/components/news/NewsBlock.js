import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NewsBlockItem from "./NewsBlockItem";
import SubscriptionBanner from "../fragments/SubscriptionBanner";

import "./news_block_item.scss";

import newsData from "../newsData.json";

function NewsBlock(props) {
 
  const newsComponents = props.news? props.news.map(news => <NewsBlockItem key={news.id} newsItem={news} />):"";
  return <div>
    {newsComponents.length>9 ?
     <div>
       {newsComponents.slice(0,9)}
       <SubscriptionBanner style={{marginBottom:40}} />
        {newsComponents.slice(9,newsComponents.length)}
     </div>
     :
     <div>{newsComponents}</div>}</div>;
}

export default NewsBlock;
