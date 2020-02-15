import React from "react";
import articlesData from "../articlesData.json";
import ArticleBlockItem from "./ArticleBlockItem.js";
import Button from "../common/Button";
import Fragment from "../fragments/Fragment";

function ArticlesBlock() {
  const articlesComponents = articlesData
    .slice(1, 6)
    .map(article => (
      <ArticleBlockItem key={article.id} articleItem={article} />
    ));
  return <Fragment size="big"> {articlesComponents}</Fragment>;
}

export default ArticlesBlock;
