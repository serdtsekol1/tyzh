import React, { useState, useEffect}  from "react";
import axios from 'axios';
import config from 'react-global-configuration';

import PublicationAbstract from "../common/PublicationAbstract";
import Parser from "html-react-parser";
import Fragment from "../fragments/Fragment";
import DateAndAuthor from "../fragments/DateAndAuthor";
import CategoryLink from "../fragments/CategoryLink";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import PhotosQuantityHolder from "../fragments/PhotosQuantityHolder";
import MetaTags from "../common/MetaTagsComponent";

import "../common/css/post.scss";


import ArticlesBlock from "../fragments/AtriclesBlock";
import MagazineMaterial from "../fragments/MagazineMaterial";


function getDate(public_ts){
  const today = new Date();
  let options = { month: 'long', day: 'numeric' ,  timeZone: 'UTC'};
  let date = new Date(public_ts).toLocaleDateString('uK-UK', options);
  if (new Date(public_ts).getYear() < today.getYear()) {
      options = {  year:'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
      date = new Date(public_ts).toLocaleDateString('uK-UK', options);
    }
  return date;
}


function ArticleTemplate(props) {
  let thisUrl= window.location.href;


  return (
   <PublicationAbstract publication={props.article}>
    <div className="container">
        <div className="d-block d-md-none">
        
        </div>
      {props.article.location? <p className="author-location author-location-no-margin">{props.article.location}</p>:""}
      {props.article.type_of_ad? <p className="author-location author-location-no-margin">{props.article.type_of_ad}</p>:""}
      <h1 className="big-post-header ">{props.article.title}</h1>
     
        {(props.article.authors) ?
        ( <div className="category-and-date">
          <DateAndAuthor date={getDate(props.article.public_ts)} author={props.article.authors} /> 
          <CategoryLink solid={true} categoryInfo={props.article} />
        </div>)
      : ""}
     
      <div className="image-cover-wrap">
      <img
        className="main-article-image"
        src={props.article.image1}
        alt=""
      />
        {props.article.imageinfo? <PhotosQuantityHolder title={props.article.imageinfo} />:""}
      </div>
     
      
      {props.article.content? (
   
     
      <div className="row">
        <div className="col-12 col-md-9">
        {props.article.magazine_id?
          <MagazineMaterial magazine_id={props.article.magazine_id}/>
        :""}
          <p className="article-block-abstract-big">
            {props.article.abstract}
          </p>
          {/* {props.article.content? <p>{props.article.content}</p>:""} */}
          <div className="body-text">
          
            {Parser(props.article.content.replace(/<p>&nbsp;<\/p>/g,"").replace(/<br \/>/g,"")
            .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<p class="read-also"><strong>Читайте також:')
            .replace(/<\s*li\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<li class="read-also"><strong>Читайте також:')
            .replace(/<\s*p\s*>\s*<\s*em\s*>\s*Читайте також:/g,'<p><em class="read-also">Читайте також:')
            .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читай також:/g,'<p class="read-also"><strong>Читайте також:')
            .replace(/<\s*p\s*>\s*<\s*b\s*>\s*Читайте також:/g,'<p class="read-also"><b>Читайте також:')
            .replace("https://new.tyzhden.ua/Publications/","https://tyzhden.ua/")
            // .replace(/<\s*p\s*>\s*<\s*strong\s*>([А-яIi ]+)<\s*strong\s*><\s*p\s*>/g,'<p class="mini-header"><strong>$1<strong><p>')
            
            , {
              // replace: domNode => {
              //   if (domNode.name === "em") {
              //     return <strong>bar</strong>;
              //   }
              // }
            })}
          </div>
          {/* <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p> */}
          {props.article.tags?
            <TagsPanel tags={props.article.tags.split(",")} />
          :""}
         
          <div className="shared-flex">
            {/* <p className="quantity-label">
              Поділилося: <b>18 осіб</b>
            </p> */}
            <SocialNetworks shareFb={true} shareTwitter={true} shareLink={thisUrl} shareText={props.article.title} color="red" />
          </div>
          <GorizontalAdBanner adpartner={true} ukrnet={true} mixadvert={true} yottos={true} redTram={true} randomBoolean={(Math.random() >= 0.5)}/>
          <div className="d-block d-md-none">
            {/* <BannersPanel ria={true} /> */}
          </div>

          <Header size="big" title="Bам також буде цікаво почитати" />
          <ArticlesBlock quantity={3} articles={props.article.more} showMoreLink="/Publications" />
        </div>
        <div className="d-none d-md-block col-md-3">
          <ShareBySocialNetworks shareFb={true} shareTwitter={true} shareLink={thisUrl} shareText={props.article.title} quantity={12} />
          <BannersPanel rubric={props.article.journal.nameua} moxTV={true} moxTV_id="moxTV_article" admixer_id="admixed-article" admixer={true} adriver_id="adriver-article" adriver={true}/>
        </div>
      </div>
    ):""}
     </div>
     </PublicationAbstract>
    
  );
}

export default ArticleTemplate;
