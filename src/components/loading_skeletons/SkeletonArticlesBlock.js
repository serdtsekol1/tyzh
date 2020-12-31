import React from "react";
import Skeleton from "react-loading-skeleton";

import { Link } from "react-router-dom";
import CategoryLink from "../fragments/CategoryLink";
import DateAndAuthor from "../fragments/DateAndAuthor";
import "../fragments/css/press_item.scss";
import PressItem from "../fragments/PressItem";
import "./skeletons.scss";

const SkeletonArticlesBlock = (props) => {
    let style = props.small ? "article-item-small" :"";
    return (
 
      <section> 
        <ul className="list">
          {Array(props.quantity)
            .fill()
            .map((item, index) => (
              <div key={index} className={`${style} article-block-item`}>
              <div className="row">
                <div
                  className={
                    props.mainArticle
                      ? "col-12 order-1"
                      : "col-12 order-1 col-md-8 order-md-0"
                  }
                >
                  <div className="skeleton-category-wrap"><Skeleton duration={1} height={34} width={300}/></div>
            
                  <p className ="press-title"><Skeleton duration={1} height={30} width={300}/></p>
                  <p className ="press-abstract"><Skeleton duration={1} height={48} width={`100%`}/></p>
                  <p><Skeleton duration={1} height={24} width={`100%`}/></p>
                </div>
                <div
                  className={
                      "col-12 order-0 col-md-4 order-md-1 article-block-image atricle-image-margin"
                  }
                >
                   <Skeleton height={170} width={`100%`}/>
                   
                </div>
              </div>
            </div>
            
            ))}
        </ul>
      </section>
    );
  };

  export default SkeletonArticlesBlock;
