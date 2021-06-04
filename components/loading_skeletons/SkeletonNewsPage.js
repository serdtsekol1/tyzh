import React from "react";
import Skeleton from "react-loading-skeleton";

import Fragment from "../fragments/Fragment";
import "../fragments/css/press_item.scss";
import "../common/css/_headers.scss";
import "../common/css/post.scss";
import "./skeletons.scss";

const SkeletonNewsPage = (props) => {

    return (
     <div>
        <Skeleton duration={1} height={62} width={'100%'}/>
        {Array(20)
            .fill()
            .map((item, index) => (
              <div className={`article-block-item`}>
              <div className="row">
                <div className= "col-12 order-1 col-md-8 order-md-0">
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
       
       </div>
    
    );
  };

  export default SkeletonNewsPage;