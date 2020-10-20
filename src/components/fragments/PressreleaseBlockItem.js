import React from "react";
import { Link } from "react-router-dom";
import CategoryLink from "./CategoryLink";
import DateAndAuthor from "./DateAndAuthor";
import "./css/press_item.scss";

import PressItem from "./PressItem";

function PressreleaseBlockItem(props) {
  let today = new Date();
  today.setHours(today.getHours() + 3);
  let style = props.small ? "article-item-small" :"";

  return (
    <div className={`${style} article-block-item`}>
      <div className="row">
        <div className={(props.mainPressrelease || !props.pressreleaseItem.image1) ? "col-12 order-1" : "col-12 order-1 col-md-8 order-md-0"}>
         
          <div className="articlesInfo">
            <PressItem pressItem={props.pressreleaseItem} type={`pressreleases`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PressreleaseBlockItem;
