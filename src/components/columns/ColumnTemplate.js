import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";

import Parser from "html-react-parser";
import DateAndAuthor from "../fragments/DateAndAuthor";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import Fragment from "../fragments/Fragment";
import ColumnsBlock from "../fragments/ColumsBlock";

import "./columns.scss";



function ColumnTemplate(props){
    let columnItem = props.columnItem;
    let today = new Date();
    let tags = columnItem.tags? columnItem.tags.split(","):[];
    let options = {  hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric'};
    let date = "";
    if (columnItem.created_ts) {
      date = new Date(columnItem.created_ts).toLocaleTimeString('uK-UK', options);

      if (new Date(columnItem.created_ts).getDate() === today.getDate()) {
        options = {  hour: 'numeric', minute: 'numeric'};
        date = new Date(columnItem.created_ts).toLocaleTimeString('uK-UK', options);
        date = `Cьогодні, ${date}`;
      }
    }

    return (
      <div className="container">
      
      {columnItem.author?
      <div className="row column-header">
        <div className="col-3 col-md-2">
          <div className="column-author-photo-wrap">
            <img className="column-author-photo" 
            src={columnItem.author.image1url}/>
          </div>
        </div>
        
        <div className="col-9 col-md-10 d-none d-md-block">
          <div className="column-author-info">
           <p className="column-author-name">{columnItem.author.fullnameua}</p>
            <p className="big-post-header column-title ">{columnItem.title}</p>
             <div className="column-date">
               <DateAndAuthor date={date} />
            </div>
            </div>
         </div>
         <div className="col-9 col-md-10 d-block d-md-none">
          <div className="mobile-column-author-info">
           <p className="column-author-name">{columnItem.author.fullnameua}</p>
           
         </div>
        </div>
      </div>
      :""}
      <div className="row">
        
        <div className="col-12 col-md-9">
          <div className="column-mobile d-block d-md-none">
            <p className="big-post-header news-header  ">{columnItem.title}</p>
            <div className="news-date">
              <DateAndAuthor date={date} />
            </div>
          </div>
          <p className="article-block-abstract-big">{columnItem.abstract}</p>
          {columnItem.content?
          <div className="body-text">
            {Parser(columnItem.content.replace(/<p>&nbsp;<\/p>/g,"").replace(/<br \/>/g,"")
            .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<p class="read-also"><strong>Читайте також:')
            .replace(/<\s*li\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<li class="read-also"><strong>Читайте також:')
            .replace(/<\s*p\s*>\s*<\s*strong\s*>/g,'<p class="mini-header"><strong>'), {
              // replace: domNode => {
              //   if (domNode.name === "em") {
              //     return <strong>bar</strong>;
              //   }
              // }
            })}
          </div>:""}
          
          <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p>
          {/* <p className="source-label">
            Джерело: <a href={columnItem.source_url}>{columnItem.source}</a>
          </p> */}
          <TagsPanel tags={tags} />
          <div class="shared-flex">
            <p className="quantity-label">
              Поділилося: <b>18 осіб</b>
            </p>
            <SocialNetworks color="red" />
          </div>
          <SubscriptionBanner />

          <div className="d-block d-md-none">
            <BannersPanel />
          </div>
          

            <Header size="big" title="Bам також буде цікаво почитати" />
            {columnItem.more?
              <ColumnsBlock columns={columnItem.more} quantity={3} />
            :""}
      
        </div>
        <div className="d-none d-md-block col-md-3">
          <ShareBySocialNetworks quantity={14} />
          <BannersPanel />
        </div>
      </div>
    </div>
      );
    
}

export default ColumnTemplate;