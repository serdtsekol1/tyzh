import React from "react";
import newsData from "../newsData.json";
import NewsBlockItem from "./NewsBlockItem.js";
import Header from "../common/Header";
import Fragment from "../fragments/Fragment";

function NewsBlock() {
  const newsComponents = newsData
    .slice(0, 4)
    .map(news => <NewsBlockItem key={news.id} newsItem={news} />);

  return (
    <Fragment size="medium">
      <Header title="Новини" size="small" />
      {newsComponents}
    </Fragment>
  );
}

export default NewsBlock;
