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
import newsData from "../newsData.json";

import "../common/css/post.scss";

function NewsItem({ match }) {
  const newsItem = newsData.find(news => news.id == match.params.id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-9">
          <p className="big-post-header news-header ">{newsItem.title}</p>
          <div className="news-date">
            <DateAndAuthor date={newsItem.date} />
          </div>
        </div>
        <div className="col-12 col-md-9">
          <p className="article-block-abstract-big">{newsItem.abstract}</p>
          <div className="body-text">
            {Parser(newsItem.html, {
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
          <p className="source-label">
            Джерело: <a href={newsItem.source_url}>{newsItem.source}</a>
          </p>
          <TagsPanel tags={newsItem.tags} />
          <div class="shared-flex">
            <p className="quantity-label">
              Поділилося: <b>{newsItem.shared_quantity} осіб</b>
            </p>
            <SocialNetworks color="red" />
          </div>
          <SubscriptionBanner />

          <div className="d-block d-md-none">
            <BannersPanel />
          </div>
          <Header size="big" title="Bам також буде цікаво почитати" />
          <NewsBlock quantity={3} />
        </div>
        <div className="d-none d-md-block col-md-3">
          <ShareBySocialNetworks quantity={newsItem.shared_quantity} />
          <BannersPanel />
        </div>
      </div>
    </div>
  );
}
export default NewsItem;
