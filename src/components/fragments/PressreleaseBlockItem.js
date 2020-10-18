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
        {props.pressreleaseItem.image1 ?
          <div className={props.mainPressrelease ? "col-12 order-0" : "col-12 order-0 col-md-4 order-md-1"}>
            {((new Date(props.pressreleaseItem.public_ts)<=today))?
              <a href={`https://old.tyzhden.ua/PressReleases/${props.pressreleaseItem.id}`}>
                <img
                  id=""
                  className="article-block-image atricle-image-margin"

                  src={props.pressreleaseItem? props.pressreleaseItem.image1: ""}
                  alt="Зображення: стаття"
                />
              </a>
              :<img
                id=""
                className="article-block-image atricle-image-margin"

                src={props.pressreleaseItem? props.pressreleaseItem.image1: ""}
                alt="Зображення: стаття"
              />}
          </div>
          : ""}
      </div>
    </div>
  );
}
export default PressreleaseBlockItem;
