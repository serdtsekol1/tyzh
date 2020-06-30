import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";


import Fragment from "../fragments/Fragment";
import Header from "../common/Header";
import NewsBlock from "../fragments/NewsBlock";
import BannersPanel from "../fragments/BannersPanel";
import newsData from "../newsData.json";
import PressItem from "../fragments/PressItem";
import LastJournalBanner from "../fragments/LastJournalBanner";
import ArticlesBlock from "../fragments/AtriclesBlock";
import "./news.scss";

function NewsTemplate(props){
 
  let options = {  month: 'long', day: 'numeric' };
  const groupedNewsComponents = props.news.map(news => <div class="news-wrap" id={news.date.getDate()*10}>
    <p class="news-date">{news.date.toLocaleDateString('uK-UK', options)}</p>
   <NewsBlock id={news.date.getDate()} news={news.news} /></div>);
  

  return (
      <div className="container">
        <div className="row" >
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-9">
                <Fragment size={"big"} noShowMore={true}>
                  <Header  size="small" style={{ fontSize: 32 }} title="Новини" />
                   {groupedNewsComponents}
                   {props.children}
                </Fragment>
              </div>
              <div className="d-none d-md-block col-md-3" style={{ marginTop: 10 }}>
              <Header title=" Останні статті" size="small" />
              <ArticlesBlock lastArticles={true} quantity={3} noShowMore={true}/>
                  <LastJournalBanner/>
                <BannersPanel/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewsTemplate;