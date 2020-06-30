import React from "react";
import Skeleton from "react-loading-skeleton";

import { Link } from "react-router-dom";
import CategoryLink from "../fragments/CategoryLink";
import Fragment from "../fragments/Fragment";
import "../fragments/css/press_item.scss";
import "../news/news.scss";
import PressItem from "../fragments/PressItem";
import SkeletonPressItem from "./SkeletonPressItem";

const SkeletonNewsBlock = (props) => {

    return (
 
      <section>
        <Fragment size={"medium"} noShowMore={true}>
        <p className="skeleton-header"><Skeleton height={30}></Skeleton></p>
         <ul className="list">
          {Array(props.quantity)
            .fill()
            .map((item, index) => (
              <SkeletonPressItem small="true"/>
            ))}
            </ul>
            <Skeleton height={40}/>
        </Fragment>
      </section>
      
    );
  };

  export default SkeletonNewsBlock;