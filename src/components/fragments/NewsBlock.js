import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NewsBlockItem from "./NewsBlockItem";

import "./css/news_block_item.scss";

import newsData from "../newsData.json";

function NewsBlock(props) {
 
  const newsComponents = props.news? props.news.map(news => <NewsBlockItem key={news.id} newsItem={news} />):"";
  return <div>{newsComponents}</div>;
}

export default NewsBlock;
