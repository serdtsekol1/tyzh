import React from "react";

import ArticleBlockItem from "./ArticleBlockItem.js";
import Button from "../common/Button";
import Fragment from "../fragments/Fragment";
import articlesData from "../articlesData.json";

function ArticlesBlock(props) {
  const articlesComponents = articlesData
    .slice(1, parseInt(props.quantity + 1))
    .map(article => (
      <ArticleBlockItem key={article.id} articleItem={article} />
    ));
  return (
    <Fragment size="big" noShowMore={props.noShowMore}>
      {articlesComponents}
      {props.children}
    </Fragment>
  );
}

export default ArticlesBlock;
