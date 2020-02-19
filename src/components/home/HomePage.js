import React from "react";
import NewsBlock from "./NewsBlock";
import AuthorsBlock from "./AuthorsBlock";
import AuthorsSmallBlock from "./AuthorsSmallBlock";
import PhotoReportBlock from "./PhotoReportBlock";

import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import BannersPanel from "../fragments/BannersPanel";
import JournalsFooter from "../fragments/JournalsFooter";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";

import articlesData from "../articlesData.json";
import SubscriptionBanner from "../fragments/SubscriptionBanner";

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
        <div className="d-none d-md-block col-md-3 order-md-2">
          <AuthorsSmallBlock />
        </div>
      </div>
      <SubscriptionBanner />
      <Header size="big" title="Статті" />
      <div className="row">
        <div className="col-12 col-md-9">
          <ArticlesBlock quantity={5} />
        </div>
        <div className="col-12 col-md-3">
          <BannersPanel secondBanner={true} />
        </div>
      </div>
      <Header size="big" title="Авторські колонки" />
      <AuthorsBlock />
      <Header size="big" title="Обрана тема" />
      <div className="row">
        <div className="col-12 col-md-9">
          <ArticlesBlock quantity={5} />
        </div>
        <div className="col-12 col-md-3">
          <BannersPanel secondBanner={true} />
        </div>
      </div>
      <PhotoReportBlock />

      <JournalsFooter />
    </div>
  );
}

export default HomePage;
