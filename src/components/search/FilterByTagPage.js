import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import config from "react-global-configuration";

import ColumnsTab from "../fragments/ColumnsTab";
import NewsTab from "../fragments/NewsTab";
import ArticlesTab from "../fragments/ArticlesTab";
import PhotoreportsTab from "../fragments/PhotoreportsTab";

import BannersPanel from '../fragments/BannersPanel';
import Header from "../common/Header";
import MetaTags from "../common/MetaTagsComponent";

import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import "../common/css/tabs.scss";
import "../authors/author.scss";


function FilterByTagPage({match}){
  const [loading, setLoading] = useState(false);
 
  let [isNews, setIsNews] = useState(false);
  let [isPhotoreports, setIsPhotoreports] = useState(false);
  let [isArticles, setIsArticles] = useState(false);
  let [isColumns, setIsColumns] = useState(false);
  let [activeTab, setActiveTab] = useState("news");
  useEffect (()=>{
    setLoading(true);

    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/columns/tags/${match.params.tag}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{ 
         
          if (res.data.results.length){
          console.log(res.data.results.length);
          setIsColumns(true); }
         
  
          })
        .catch(err => console.log(err));  
      apiUrl = `${config.get("apiDomain")}/galleries/tags/${match.params.tag}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{ 
         
          if (res.data.results.length)
          setIsPhotoreports(true);
  
          })
        .catch(err => console.log(err));  
        apiUrl = `${config.get("apiDomain")}/publications/tags/${match.params.tag}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{ 
          console.log(res.data.results.length);
          if (res.data.results.length)
          setIsArticles(true);
  
          })
        .catch(err => console.log(err)); 
      apiUrl = `${config.get("apiDomain")}/news/tags/${match.params.tag}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{ 
          
          if (res.data.results.length)
          setIsNews(true);
          setLoading(false);
  
          })
          .catch(err => console.log(err)); 
      };
       
      fetchData();
      
     
  },[match.params.tag]);
  useEffect(()=>{
    if (isPhotoreports) setActiveTab("photo");
    if (isColumns) setActiveTab("columns");
    if (isArticles) setActiveTab("articles");
    if (isNews) setActiveTab("news");
  },[isNews,isColumns,isArticles,isPhotoreports])
    
    return (
       
    <div className="container">
      
      {loading && <SkeletonPublication article={true}/>}
         {!loading &&
      
      <div>
        <MetaTags title={match.params.tag} 
      abstract={match.params.tag}
      ct100={true} keywords={match.params.tag}
      noImage={true}
      />
     
      <Header style={{paddingBottom:24}}title={`Всі матеріали, позначені тегом: ${match.params.tag}`}/>
      
      <div className="row">
          <div class="col-12 author-tabs">
            <Tabs defaultActiveKey={activeTab} id="uncontrolled-tab-example">
                {isNews?
                  <Tab eventKey="news" title="Новини">
                      <div className="row">
                          <div className="col-12 col-md-9">
                              
                              <NewsTab tag={match.params.tag}/>

                          </div>
                          <div className="col-12 col-md-3">
                          <BannersPanel my={true} ria={true} />
                          </div>
                      </div>
                  </Tab>
                  :""}
                  {isArticles?
                  <Tab eventKey="articles" title="Статті">
                      <div className="row">
                          <div className="col-12 col-md-9">
                              
                              <ArticlesTab tag={match.params.tag}/>

                          </div>
                          <div className="col-12 col-md-3">
                          <BannersPanel my={true}  ria={true} />
                          </div>
                      </div>
                  </Tab>
                  :""}
                {isColumns?   
                  <Tab eventKey="columns" title="Колонки">
                  <div className="row">
                          <div className="col-12 col-md-9">
                        
                          <ColumnsTab tag={match.params.tag}/>
                          </div>
                          <div className="col-12 col-md-3">
                          <BannersPanel my={true} admixer_id="admixed-author-news" admixer={true} ria={true} />
                          </div>
                      </div>
                      
                  </Tab>
                  :""}
                 
                  {isPhotoreports?
                  <Tab eventKey="photo" title="Фоторепортажі">
                      <div className="row">
                          <div className="col-12 col-md-9">
                          <PhotoreportsTab tag={match.params.tag}/>

                          </div>
                          <div className="col-12 col-md-3 banner-no-margin">
                          <BannersPanel ria={true} my={true}/>
                          </div>
                      </div>
                  </Tab>
                  :""}
                
                  
              
              </Tabs>
                    </div>
                   
             </div>
      </div>
      }
    </div>
    );
}

export default FilterByTagPage;