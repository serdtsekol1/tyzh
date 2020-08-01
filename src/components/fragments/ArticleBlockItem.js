import React from "react";
import { Link } from "react-router-dom";
import CategoryLink from "./CategoryLink";
import DateAndAuthor from "./DateAndAuthor";
import "./css/press_item.scss";
import PressItem from "./PressItem";

function ArticleBlockItem(props) {
  let style = props.small ? "article-item-small" :"";
  
  return (
    <div className={`${style} article-block-item`}>
      <div className="row">
        <div
          className={
            props.mainArticle
              ? "col-12 order-1"
              : "col-12 order-1 col-md-8 order-md-0"
          }
        >
          {(props.categorial && props.mainArticle) ?<div className="no-category-holder"></div> :""}
          {props.categorial? "" :
          <CategoryLink
          categoryInfo={props.articleItem} />}
         
        <div className={ props.categorial? "" :"articlesInfo"}>
          <PressItem pressItem={props.articleItem} type="article"/>
        </div>
        </div>
        <div
          className={
            props.mainArticle
              ? "col-12 order-0"
              : "col-12 order-0 col-md-4 order-md-1"
          }
        >
           <Link to={`/article/${props.articleItem.id}`}>
          <img
            id={props.mainArticle && !props.small? "main-article" : ""}
            className={
              props.mainArticle || props.categorial
                ? "article-block-image"
                : "article-block-image atricle-image-margin"
            }
            
            src={props.articleItem? props.articleItem.image1: ""}
            alt="Зображення: стаття"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ArticleBlockItem;
