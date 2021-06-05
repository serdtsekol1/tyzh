import React from "react";
import Skeleton from "react-loading-skeleton";

import Fragment from "../fragments/Fragment";

const SkeletonPublication = (props) => {

    return (
        <div className="container">
      <Fragment size="big" noShowMore={true}>
        <p className="big-post-header"><Skeleton duration={1} height={62} width={'100%'}/></p>
        {props.article ?
        <div>
            <Skeleton className="category-and-date" height={42} width={`100%`}/>
            <Skeleton className="main-article-image" height={700} width={`100%`}/>
        </div>
        :""}
        <div className="row">
        <div className="col-12 col-md-9">
          <p className="article-block-abstract-big">
            <Skeleton duration={1} height={62} width={`100%`}/>
          </p>
          <div className="body-text">
            <Skeleton duration={1} height={1000} width={`100%`}/>
          </div>
          </div>
          <div className="col-12 col-md-3">
                <div><Skeleton duration={1} height={138} width={`100%`}/></div>
                <div className="image-banner"><Skeleton duration={1} height={383} width={`100%`}/></div>
          
              
          </div>
          </div>
       
      </Fragment>
      </div>
    );
  };

  export default SkeletonPublication;
