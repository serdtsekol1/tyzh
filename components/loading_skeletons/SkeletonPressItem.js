import React from "react";
import Skeleton from "react-loading-skeleton";

import { Link } from "react-router-dom";
import CategoryLink from "../fragments/CategoryLink";
import DateAndAuthor from "../fragments/DateAndAuthor";
import "../fragments/css/press_item.scss";
import "../news/news.scss";
import "./skeletons.scss";
import PressItem from "../fragments/PressItem";

const SkeletonPressItem = (props) => {

    return (
 
      <section>
        <div className="skeleton-press-info">
        
        <p className ="press-title"><Skeleton height={props.small? 65 : 70} width={`100%`}/></p>
        <p><Skeleton  height={24} width={`100%`}/></p>
        </div>
      </section>
    );
  };

  export default SkeletonPressItem;