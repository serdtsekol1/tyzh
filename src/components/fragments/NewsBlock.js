import React from "react";
import { Link } from "react-router-dom";
import newsData from "../newsData.json";
import NewsBlockItem from "./NewsBlockItem";
import Fragment from "../fragments/Fragment";
import "./css/news_block_item.scss";

function NewsBlock(props) {
  const newsComponents = newsData
    .slice(0, props.quantity)
    .map(news => <NewsBlockItem key={news.id} newsItem={news} />);
  return <Fragment size="big">{newsComponents}</Fragment>;
}

export default NewsBlock;
