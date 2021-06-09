import React, { useState, useEffect} from "react";
import { useHistory, Link } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import config from "react-global-configuration";

import ColumnsTab from "../fragments/ColumnsTab";
import NewsTab from "../fragments/NewsTab";
import ArticlesTab from "../fragments/ArticlesTab";
import PhotoreportsTab from "../fragments/PhotoreportsTab";

import BannersPanel from '../fragments/BannersPanel';
import Button from "../common/Button";

import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import "../common/css/tabs.scss";
import "./author.scss";


function Author({match}){
  const [loading, setLoading] = useState(false);
  let history = useHistory();
 
  let [author, setAuthor] = useState({});
  let [isNews, setIsNews] = useState(false);
  let [isPhotoreports, setIsPhotoreports] = useState(false);
  let [isArticles, setIsArticles] = useState(false);
  let [isColumns, setIsColumns] = useState(false);
  let [activeTab, setActiveTab] = useState("columns");
  useEffect (()=>{
    setLoading(true);

    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/authors/page/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
     
        setAuthor(res.data);

        })
      .catch(err => console.log(err));  
      apiUrl = `${config.get("apiDomain")}/columns/author/${match.params.id}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{ 
         
          if (res.data.results.length){
      
          setIsColumns(true); }
         
  
          })
        .catch(err => console.log(err));  
      apiUrl = `${config.get("apiDomain")}/galleries/author/${match.params.id}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{ 
         
          if (res.data.results.length)
          setIsPhotoreports(true);
  
          })
        .catch(err => console.log(err));  
        apiUrl = `${config.get("apiDomain")}/publications/author/${match.params.id}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{ 
          console.log(res.data.results.length);
          if (res.data.results.length)
          setIsArticles(true);
  
          })
        .catch(err => console.log(err)); 
      apiUrl = `${config.get("apiDomain")}/news/author/${match.params.id}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{ 
          
          if (res.data.results.length)
          setIsNews(true);
          setLoading(false);
  
          })
          .catch(err => console.log(err)); 
      };
       
      fetchData();
      
     
  },[match.params.id]);

  useEffect(()=>{

    if(isArticles) {
      setActiveTab("articles")
    }
    if(isNews) {
      setActiveTab("news")
    }
    if(isPhotoreports) {
      setActiveTab("photo")
    }
    if(isColumns) {
      setActiveTab("columns")
    }

    switch (match.params.tab) {
      case "Publications":
        if(isArticles) setActiveTab("articles");
        break;
      case "News":
        if (isNews) setActiveTab("news");
        break;
      case "Gallery":
        if (isPhotoreports) setActiveTab("photo");
        break;
      case "Column":
        if (isColumns) setActiveTab("columns");
        break;
      default:
        history.push(`/Author/${match.params.id}`);
        break;
    }
  },[isNews,isColumns,isArticles,isPhotoreports,match.params.tab]);

  function hanldleChange(key){
    switch (key) {
      case "news":
        history.push(`/Author/${match.params.id}/News`);
        break;
      case "articles":
        history.push(`/Author/${match.params.id}/Publications`);
        break;
      case "photo":
        history.push(`/Author/${match.params.id}/Gallery`);
        break;
      case "columns":
        history.push(`/Author/${match.params.id}/Column`);
        break;
      default:
        history.push(`/Author/${match.params.id}`);
        break;
    }
  };
    
    return (
       
    <div className="container">
      
      {loading && <SkeletonPublication article={true}/>}
         {!loading &&
      
      <div>
   
        <div className="row column-header">
          <div className="col-3 col-md-2">
            <div className="column-author-photo-wrap">
              <img className="column-author-photo"
              src={author.image1url}/>
            </div>
          </div>

          <div className="col-9 col-md-10 d-none d-md-block">
            <div className="author-info-wrap">

              <p className="big-post-header column-title ">{author.fullname2ua}</p>
              {/* <p className="author-info">{author.info?author.info:"На жаль, у нас немає інформації про цього автора"}</p>
              */}
              </div>
           </div>
           <div className="col-9 col-md-10 d-block d-md-none">
            <div className="mobile-column-author-info">
             <p className="column-author-name">{author.fullname2ua}</p>

           </div>
          </div>
        </div>
        <div className="row">
            <div className="col-12 author-tabs">
              <Tabs defaultActiveKey={activeTab} id="uncontrolled-tab-example" onSelect={hanldleChange}>
                  {isColumns?
                    <Tab eventKey="columns" title="Колонки">
                    <div className="row">
                            <div className="col-12 col-md-9">

                            <ColumnsTab authorId={match.params.id}/>
                            </div>
                            <div className="col-12 col-md-3">
                            <BannersPanel my={true} />
                            </div>
                        </div>

                    </Tab>
                    :""}
                    {isNews?
                    <Tab eventKey="news" title="Новини">
                        <div className="row">
                            <div className="col-12 col-md-9">

                                <NewsTab authorId={match.params.id}/>

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

                                <ArticlesTab authorId={match.params.id}/>

                            </div>
                            <div className="col-12 col-md-3">
                            <BannersPanel my={true}  ria={true} />
                            </div>
                        </div>
                    </Tab>
                    :""}
                    {isPhotoreports?
                    <Tab eventKey="photo" title="Фоторепортажі">
                        <div className="row">
                            <div className="col-12 col-md-9">
                            <PhotoreportsTab authorId={match.params.id}/>

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

export default Author;
