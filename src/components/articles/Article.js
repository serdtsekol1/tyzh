import React from "react";
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

function Article({ match }) {
  const articleItem = articlesData.find(
    article => article.id == match.params.id
  );

  return (
    <div className="container">
      <p className="big-post-header ">{articleItem.title}</p>
      <div class="category-and-date">
        <CategoryLink style={{ marginBottom: 8 }} categoryInfo={articleItem} />
        <DateAndAuthor date={articleItem.date} author={articleItem.author} />
      </div>

      <img
        className="main-article-image"
        src={require(`../../images/articles/${articleItem.article_image}`)}
        alt=""
      />
      <div className="row">
        <div className="col-12 col-md-9">
          <p className="article-block-abstract-big">
            {articleItem.article_abstract}
          </p>
          <div className="body-text">
            {Parser(articleItem.html, {
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
          <TagsPanel tags={articleItem.tags} />
          <div class="shared-flex">
            <p className="quantity-label">
              Поділилося: <b>{articleItem.shared_quantity} осіб</b>
            </p>
            <SocialNetworks color="red" />
          </div>
          <SubscriptionBanner />
          <div className="d-block d-md-none">
            <BannersPanel />
          </div>

          <Header size="big" title="Bам також буде цікаво почитати" />
          <ArticlesBlock quantity={3} showMoreLink="/articles" />
        </div>
        <div className="d-none d-md-block col-md-3">
          <ShareBySocialNetworks quantity={articleItem.shared_quantity} />
          <BannersPanel />
        </div>
      </div>
    </div>
  );
}

export default Article;
