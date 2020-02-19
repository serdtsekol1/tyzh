import React from "react";
import { Link } from "react-router-dom";
import CategoryLink from "./CategoryLink";
import DateAndAuthor from "./DateAndAuthor";
import "./css/article_block_item.scss";

function ArticleBlockItem(props) {
  return (
    <div className="article-block-item">
      <div className="row">
        <div
          className={
            props.mainArticle
              ? "col-12 order-1"
              : "col-12 order-1 col-md-8 order-md-0"
          }
        >
          <CategoryLink
            style={{ marginBottom: 8 }}
            categoryInfo={props.articleItem}
          />
          <div className="articleInfo">
            <Link to={`/article/${props.articleItem.id}`}>
              <p className="article-block-title">
                {props.articleItem.article_title}
              </p>
            </Link>
            <p className="article-block-abstract">
              {props.articleItem.article_abstract}
            </p>
            <DateAndAuthor
              date={props.articleItem.date}
              author={props.articleItem.author}
            />
          </div>
        </div>
        <div
          className={
            props.mainArticle
              ? "col-12 order-0"
              : "col-12 order-0 col-md-4 order-md-1"
          }
        >
          <img
            style={props.imageStyle}
            className={
              props.mainArticle
                ? "article-block-image"
                : "article-block-image atricle-image-margin"
            }
            src={require(`../../images/articles/${props.articleItem.article_image}`)}
            alt="Зображення: стаття"
          />
        </div>
      </div>
    </div>
  );
}
export default ArticleBlockItem;
