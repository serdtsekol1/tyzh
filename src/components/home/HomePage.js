import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";

import axios from 'axios';
import SmallNewsBlock from "./SmallNewsBlock";
import HomeAuthorsBlock from "./HomeAuthorsBlock";
import HomeAuthorsSmallBlock from "./HomeAuthorsSmallBlock";
import PhotoReportBlock from "./PhotoReportBlock";
import VideoTranslation from "./VideoTranslation";

import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import BannersPanel from "../fragments/BannersPanel";
import JournalsFooter from "../fragments/JournalsFooter";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";
import MetaTags from "../common/MetaTagsComponent";

import Skeleton from "react-loading-skeleton";
import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import SkeletonMainArticle from "../loading_skeletons/SkeletonMainArticle";



import SubscriptionBanner from "../fragments/SubscriptionBanner";
import DonationBanner from "../fragments/DonationBanner";
import config from "react-global-configuration";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [mainArticles, setMainArticles] = useState([]);
  const [videoTranslation, setVideoTranslation] = useState({});
  const [loading, setLoading] = useState(false);
 
  useEffect (()=>{
    setLoading(true);
    const fetchArticles= async () => {
      let limit = 6;
      await axios.get(`${config.get("apiDomain")}/publications/?limit=${limit}`)
      .then(res =>{ 
        setArticles(res.data.results);
       
      })
      .catch(err => console.log(err));
      await axios.get(`${config.get("apiDomain")}/publications/type/selected/`)
      .then(res =>{ 
        setMainArticles(res.data.results);
        
      })
      .catch(err => console.log(err));
      await axios.get(`${config.get("apiDomain")}/videos/live/`)
      .then(res =>{ 
       
        setVideoTranslation(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
     };
     fetchArticles();
  },[]);
    
  let mainArticle = mainArticles.slice(0,1)
  .map(article => (
    <ArticleBlockItem 
    mainArticle={true} key={article.id} articleItem={article} />
  ));
  let articlesComponent = <ArticlesBlock quantity={5}  articles={articles.slice(0,5)}  showMoreLink="/Publications" />;

  return (
    <div className="container">
    <MetaTags/>
      <div className="row">
        <div className="col-12 order-1 col-md-3 order-md-0">
          <SmallNewsBlock />
         
           
        </div>
        <div className="col-12 order-0 col-md-6 order-md-1 ">
        
          {loading && <SkeletonMainArticle/>}
          {!loading &&
           <div>
            {Object.keys(videoTranslation).length === 0 && videoTranslation.constructor === Object?
              
            <div >{mainArticle}</div>
            : <VideoTranslation videoTranslation={videoTranslation} />
            }
          </div>
          }
        </div>
        
        <div className="d-none d-md-block col-md-3 order-md-2">
          <HomeAuthorsSmallBlock/>
        </div>
    </div>
      <SubscriptionBanner />

      {loading && 
      <p className="skeleton-header"><Skeleton height={30}></Skeleton></p>}
      {!loading &&
        <Link to="/Publications"><Header size="big" title="Статті" /></Link>
      }
      <div className="row">
        <div className="col-12 col-md-9">
          
        {loading && <SkeletonArticlesBlock  quantity={5} />}
        {!loading &&
          <div >{articlesComponent}</div>
        }
        </div>
        <div className="col-12 col-md-3">
          <BannersPanel my={true} ria={true} />
        </div>
      </div>
      <Link to="/Columns"><Header size="big" title="Авторські колонки" /></Link>
      <HomeAuthorsBlock />
      <DonationBanner />

      <PhotoReportBlock />
      <Link to="/Magazines"><Header size="big" title="Журнал «Український тиждень»"/></Link>
      <JournalsFooter />
      
 
    </div>
  );
}

export default HomePage;
