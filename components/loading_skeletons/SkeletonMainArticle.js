import React from "react";
import Skeleton from "react-loading-skeleton";

import Fragment from "../fragments/Fragment";

const SkeletonMainArticle = (props) => {

    return (
 
      <Fragment size="big" noShowMore={true}>
        
        <Skeleton height={300} width={`100%`}/>
        <div className="skeleton-category-wrap"><Skeleton duration={1} height={34} width={300}/></div>
        <p className ="press-title"><Skeleton duration={1} height={30} width={300}/></p>
        <p className ="press-abstract"><Skeleton duration={1} height={48} width={`100%`}/></p>
        <p><Skeleton duration={1} height={24} width={`100%`}/></p>
       
      </Fragment>
    );
  };

  export default SkeletonMainArticle;