import React, { useState, useEffect}  from "react";
import axios from 'axios';
import config from 'react-global-configuration';

import Parser from "html-react-parser";
import Fragment from "../fragments/Fragment";
import DateAndAuthor from "../fragments/DateAndAuthor";
import CategoryLink from "../fragments/CategoryLink";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";

import "../common/css/post.scss";
import articlesData from "../articlesData.json";

import ArticlesBlock from "../fragments/AtriclesBlock";

function ArticleTemplate(props) {
  let options = {  month: 'long', day: 'numeric' };
  console.log(props.article);
  return (
    <div className="container">
      <p className="big-post-header ">{props.article.title}</p>
     
        {(props.article.author) ?
        ( <div className="category-and-date">
          <CategoryLink style={{ marginBottom: 8 }} categoryInfo={props.article} />
          <DateAndAuthor date={props.article.created_ts.toLocaleDateString('uK-UK', options)} author={props.article.author.fullnameua} /> 
        </div>)
      : ""}
      <img
        className="main-article-image"
        src={props.article.image1}
        alt=""
      />
      {props.article.content? (
   
     
      <div className="row">
        <div className="col-12 col-md-9">
          <p className="article-block-abstract-big">
            {props.article.abstract}
          </p>
          <div className="body-text">
            {Parser(props.article.content.replace(/<p>&nbsp;<\/p>/g,""), {
              // replace: domNode => {
              //   if (domNode.name === "em") {
              //     return <strong>bar</strong>;
              //   }
              // }
            })}
          </div>
          <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p>
          <TagsPanel tags={props.article.tags.split(",")} />
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
          <ArticlesBlock quantity={3} articles={props.article.more} showMoreLink="/articles" />
        </div>
        <div className="d-none d-md-block col-md-3">
          <ShareBySocialNetworks quantity={12} />
          <BannersPanel />
        </div>
      </div>
    ):""}
     </div>
  );
}

export default ArticleTemplate;
