import React from "react";
import { Link } from "react-router-dom";
import CategoryLink from "./CategoryLink";
import DateAndAuthor from "./DateAndAuthor";
import "./css/press_item.scss";
import categoties from "../common/categories.json";

import PressItem from "./PressItem";

function ArticleBlockItem(props) {
  let today = new Date();
  today.setHours(today.getHours() + 3);
  let style = props.small ? "article-item-small" :"";
  let category =  categoties.find(
    category => {
      return category.category_name == props.articleItem.journal.nameua;
    }
  )
  category = category?category.category_id:null;
  console.log(new Date(props.articleItem.public_ts),today);
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
          <PressItem pressItem={props.articleItem} type={`Publications/${category}`} />
        </div>
        </div>
        <div
          className={
            props.mainArticle
              ? "col-12 order-0"
              : "col-12 order-0 col-md-4 order-md-1"
          }
        >
           {((new Date(props.articleItem.public_ts)<=today))?
           <Link to={`/Publications/${category}/${props.articleItem.id}`}>
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
        :<img
        id={props.mainArticle && !props.small? "main-article" : ""}
        className={
          props.mainArticle || props.categorial
            ? "article-block-image"
            : "article-block-image atricle-image-margin"
        }
        
        src={props.articleItem? props.articleItem.image1: ""}
        alt="Зображення: стаття"
      />}
        </div>
      </div>
    </div>
  );
}
export default ArticleBlockItem;
