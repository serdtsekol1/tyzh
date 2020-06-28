import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NewsBlockItem from "./NewsBlockItem";
import Fragment from "./Fragment";
import "./css/news_block_item.scss";

import newsData from "../newsData.json";

function NewsBlock(props) {
 
  const newsComponents = props.news.map(news => <NewsBlockItem key={news.id} newsItem={news} />);
  return <Fragment size="big">{newsComponents}</Fragment>;
}

export default NewsBlock;
