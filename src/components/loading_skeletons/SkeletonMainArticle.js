import React from "react";
import Skeleton from "react-loading-skeleton";

import { Link } from "react-router-dom";
import Fragment from "../fragments/Fragment";
import DateAndAuthor from "../fragments/DateAndAuthor";
import "../fragments/css/press_item.scss";
import "./skeletons.scss";
import PressItem from "../fragments/PressItem";

const SkeletonMainArticle = (props) => {

    return (
 
      <Fragment size="big" noShowMore={true}>
        
        <Skeleton height={300} width={`100%`}/>
        <div class="skeleton-category-wrap"><Skeleton duration={1} height={34} width={300}/></div>
        <p class ="press-title"><Skeleton duration={1} height={30} width={300}/></p>
        <p class ="press-abstract"><Skeleton duration={1} height={48} width={`100%`}/></p>
        <p><Skeleton duration={1} height={24} width={`100%`}/></p>
       
      </Fragment>
    );
  };

  export default SkeletonMainArticle;