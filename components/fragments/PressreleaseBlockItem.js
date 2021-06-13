import React from "react";
import CategoryLink from "./CategoryLink";
import DateAndAuthor from "./DateAndAuthor";

import PressItem from "./PressItem";

function PressreleaseBlockItem(props) {
  let today = new Date();
  today.setHours(today.getHours() + 3);
  let style = props.small ? "article-item-small" :"";

  return (
    <div className={`${style} article-block-item`}>
      <div className="row">
        <div className={(props.mainPressrelease || !props.pressreleaseItem.image1) ? "col-12 order-1" : "col-12 order-1 col-md-8 order-md-0"}>
         
          <div className="pressreleasesInfo">
            <PressItem pressItem={props.pressreleaseItem} type={`pressreleases`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PressreleaseBlockItem;
