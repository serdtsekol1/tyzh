import React, { useState, useEffect} from "react";
import axios from 'axios';
import SmallNewsBlock from "./SmallNewsBlock";
import HomeAuthorsBlock from "./HomeAuthorsBlock";
import HomeAuthorsSmallBlock from "./HomeAuthorsSmallBlock";
import PhotoReportBlock from "./PhotoReportBlock";

import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import BannersPanel from "../fragments/BannersPanel";
import JournalsFooter from "../fragments/JournalsFooter";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";


import articlesData from "../articlesData.json";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import config from "react-global-configuration";

function HomePage() {
  const [articles, setArticles] = useState([]);
  useEffect (()=>{
    const fetchArticles= async () => {
      let limit = 6;
      await axios.get(`${config.get("apiDomain")}/publications/?limit=${limit}`)
      .then(res =>{ 
        setArticles(res.data.results);
      })
      .catch(err => console.log(err));
     
     };
     fetchArticles();
  },[]);
    
  let mainArticle = articles.slice(0,1)
  .map(article => (
    <ArticleBlockItem 
    mainArticle={true} key={article.id} articleItem={article} />
  ));
  let articlesComponent = <ArticlesBlock quantity={5}  articles={articles}  showMoreLink="/articles" />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 order-1 col-md-3 order-md-0">
          <SmallNewsBlock />
        </div>
        <div className="col-12 order-0 col-md-6 order-md-1 ">
          {mainArticle}
        </div>
        <div className="d-none d-md-block col-md-3 order-md-2">
          <HomeAuthorsSmallBlock />
        </div>
      </div>
      <SubscriptionBanner />
      <Header size="big" title="Статті" />
      <div className="row">
        <div className="col-12 col-md-9">
          {articlesComponent}
        </div>
        <div className="col-12 col-md-3">
          <BannersPanel secondBanner={true} />
        </div>
      </div>
      <Header size="big" title="Авторські колонки" />
      <HomeAuthorsBlock />
      
      <PhotoReportBlock />
      <Header size="big" title="Журнал «Український тиждень»"/>
      <JournalsFooter />
    </div>
  );
}

export default HomePage;
