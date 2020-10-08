import React from "react";
import { useState, useEffect } from 'react';
import ScriptTag from 'react-script-tag';
import PublicationAbstract from "../common/PublicationAbstract";

import Parser from "html-react-parser";
import DateAndAuthor from "../fragments/DateAndAuthor";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import NewsBlock from "./NewsBlock";
import Fragment from "../fragments/Fragment";
import MetaTags from "../common/MetaTagsComponent";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import "../common/css/post.scss";

function getImgSrc(content) {
    var tmp = document.createElement('div');
    tmp.innerHTML = content;
    var src=[],img = tmp.getElementsByTagName('img');
    //var src = img.src;
    for (var i = 0; i < img.length; i++) {
        src.push(img[i].src);
    }
    return src[0];
}

function NewsItemTemplate(props) {
  let tags = props.newsItem.tags? props.newsItem.tags.split(","):[];
  let today = new Date();
  // today.setDate(today.getDate() - 5);

  let options = {  hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric',  timeZone: 'UTC'};
  let date = "";
  if (props.newsItem.public_ts) {
    date = new Date(props.newsItem.public_ts).toLocaleTimeString('uK-UK', options);

    if (new Date(props.newsItem.public_ts).getDate() === today.getDate()) {
      options = {  hour: 'numeric', minute: 'numeric',  timeZone: 'UTC'};
      date = new Date(props.newsItem.public_ts).toLocaleTimeString('uK-UK', options);
      date = `Cьогодні, ${date}`;
    }
  }
  
  return (
    <PublicationAbstract publication={props.newsItem}>
    <div className="container">
      <MetaTags image={props.newsItem.photo?getImgSrc(props.newsItem.content):''} />
      <div className="row">
        <div className="col-12 col-md-9">
          {props.newsItem.type_of_ad? <p className="author-location author-location-no-margin">{props.newsItem.type_of_ad}</p> :""}
          <h1 className="big-post-header news-header ">{props.newsItem.title}</h1>
          <div className="news-date">
            <DateAndAuthor date={date} />
          </div>
        </div>
        <div className="col-12 col-md-9">
          <p className="article-block-abstract-big">{props.newsItem.abstract}</p>
          {props.newsItem.content?
          <div className="body-text">
           {Parser(props.newsItem.content.replace(/<p>&nbsp;<\/p>/g,"").replace(/<br \/>/g,"")
            .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<p class="read-also"><strong>Читайте також:')
            .replace(/<\s*li\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<li class="read-also"><strong>Читайте також:')
            .replace(/<\s*p\s*>\s*<\s*em\s*>\s*Читайте також:/g,'<p><em class="read-also">Читайте також:')
            .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читай також:/g,'<p class="read-also"><strong>Читайте також:')
            .replace(/<\s*p\s*>\s*<\s*b\s*>\s*Читайте також:/g,'<p class="read-also"><b>Читайте також:')
            .replace("https://new.tyzhden.ua/Publications/","https://tyzhden.ua/")
            // .replace(/<\s*p\s*>\s*<\s*strong\s*>([А-яIi ]+)<\s*strong\s*><\s*p\s*>/g,'<p class="mini-header"><strong>')
            , {
              // replace: domNode => {
              //   if (domNode.name === "em") {
              //     return <strong>bar</strong>;
              //   }
              // }
            })}
          </div>:""}
          
          {/* <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p> */}
          {props.newsItem.source?
            <p className="source-label">
              Джерело: <a href={props.newsItem.source.url0}>{props.newsItem.source.nameua}</a>
              {props.newsItem.source2? <span><a href={props.newsItem.source2.url0}>, {props.newsItem.source2.nameua}</a></span>:""}
            </p>
          :""}
          <TagsPanel tags={tags} />
          <div className="shared-flex">
            {/* <p className="quantity-label">
              Поділилося: <b>18 осіб</b>
            </p> */}
            <SocialNetworks shareFb={true} shareTwitter={true} shareLink={window.location.href} shareText={props.newsItem.title} color="red" />
          </div>
          <GorizontalAdBanner ukrnet={true} mixadvert={true} adpartner={true} yottos={true}/>

          <div className="d-block d-md-none">
            <BannersPanel ria={true} my={true} />
          </div>
          <Fragment size="big"  showMoreLink="/news" >

            <Header size="big" title="Bам також буде цікаво почитати" />
            <NewsBlock news={props.newsItem.more} quantity={3} />
          </Fragment>
        </div>
        <div className="d-none d-md-block col-md-3">
          <ShareBySocialNetworks shareFb={true} shareTwitter={true} shareLink={window.location.href} shareText={props.newsItem.title} quantity={14} />
          <BannersPanel admixer_id="admixed-news-item" admixer={true} ria={true} adriver={true} adriver_id="adriver-filter" />
        </div>
      </div>
    </div>
    </PublicationAbstract>
  );
}
export default NewsItemTemplate;
