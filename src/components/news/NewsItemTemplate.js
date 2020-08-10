import React from "react";
import { useState, useEffect } from 'react';
import ScriptTag from 'react-script-tag';
import PublicationAbstract from "../common/PublicationAbstract";

import Parser from "html-react-parser";
import DateAndAuthor from "../fragments/DateAndAuthor";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import NewsBlock from "./NewsBlock";
import Fragment from "../fragments/Fragment";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import "../common/css/post.scss";

function NewsItemTemplate(props) {
  let tags = props.newsItem.tags? props.newsItem.tags.split(","):[];
  let today = new Date();
 
  // today.setDate(today.getDate() - 5);

  let options = {  hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric'};
  let date = "";
  if (props.newsItem.created_ts) {
    date = new Date(props.newsItem.created_ts).toLocaleTimeString('uK-UK', options);

    if (new Date(props.newsItem.created_ts).getDate() === today.getDate()) {
      options = {  hour: 'numeric', minute: 'numeric'};
      date = new Date(props.newsItem.created_ts).toLocaleTimeString('uK-UK', options);
      date = `Cьогодні, ${date}`;
    }
  }
  
  return (
    <PublicationAbstract publication={props.newsItem}>
    <div className="container">

      <div className="row">
        <div className="col-12 col-md-9">
          <p className="big-post-header news-header ">{props.newsItem.title}</p>
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
            .replace(/<\s*p\s*>\s*<\s*strong\s*>/g,'<p class="mini-header"><strong>'), {
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
          {/* <p className="source-label">
            Джерело: <a href={props.newsItem.source_url}>{props.newsItem.source}</a>
          </p> */}
          <TagsPanel tags={tags} />
          <div class="shared-flex">
            {/* <p className="quantity-label">
              Поділилося: <b>18 осіб</b>
            </p> */}
            <SocialNetworks shareFb={true} shareTwitter={true} shareLink={window.location.href} shareText={props.newsItem.title} color="red" />
          </div>
          <SubscriptionBanner />

          <div className="d-block d-md-none">
            <BannersPanel ria={true} yottos={true} />
          </div>
          <Fragment size="big"  showMoreLink="/news" >

            <Header size="big" title="Bам також буде цікаво почитати" />
            <NewsBlock news={props.newsItem.more} quantity={3} />
          </Fragment>
        </div>
        <div className="d-none d-md-block col-md-3">
          <ShareBySocialNetworks shareFb={true} shareTwitter={true} shareLink={window.location.href} shareText={props.newsItem.title} quantity={14} />
          <BannersPanel ria={true}/>
        </div>
      </div>
    </div>
    </PublicationAbstract>
  );
}
export default NewsItemTemplate;
