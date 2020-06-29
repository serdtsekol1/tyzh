import React from "react";
import Parser from "html-react-parser";
import DateAndAuthor from "../fragments/DateAndAuthor";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import NewsBlock from "../fragments/NewsBlock";
import Fragment from "../fragments/Fragment";

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
            {Parser(props.newsItem.content.replace(/<p>&nbsp;<\/p>/g,""), {
              replace: domNode => {
                if (domNode.name === "em") {
                  return <strong>bar</strong>;
                }
              }
            })}
          </div>:""}
          
          <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p>
          <p className="source-label">
            Джерело: <a href={props.newsItem.source_url}>{props.newsItem.source}</a>
          </p>
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
          <Fragment size="big"  showMoreLink="/news" >

            <Header size="big" title="Bам також буде цікаво почитати" />
            <NewsBlock news={props.newsItem.more} quantity={3} />
          </Fragment>
        </div>
        <div className="d-none d-md-block col-md-3">
          <ShareBySocialNetworks quantity={14} />
          <BannersPanel />
        </div>
      </div>
    </div>
  );
}
export default NewsItemTemplate;
