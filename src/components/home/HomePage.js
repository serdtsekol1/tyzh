import React from "react";
import NewsBlock from "./NewsBlock";
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import articlesData from "../articlesData.json";
import Header from "../common/Header";
import BannersPanel from "../fragments/BannersPanel";
import JournalsFooter from "../fragments/JournalsFooter";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 order-1 col-md-3 order-md-0">
          <NewsBlock />
        </div>
        <div className="col-12 order-0 col-md-6 order-md-1 ">
          <ArticleBlockItem mainArticle={true} articleItem={articlesData[0]} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-9">
          <Header size="big" title="Статті" />
          <ArticlesBlock />
        </div>
        <div className="col-12 col-md-3">
          <BannersPanel />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-9">
          <Header size="big" title="Обрана тема" />
          <ArticlesBlock />
        </div>
        <div className="col-12 col-md-3">
          <BannersPanel />
        </div>
      </div>

      <JournalsFooter />
    </div>
  );
}

export default HomePage;
