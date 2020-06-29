import React from "react";
import PressItem from "./PressItem";
import "../columns/columns.scss";


function ColumnsBlockItem(props) {
 
  return (

    <div>
      {props.columnItem ? 
      <div className="column-item row">
        <div className="col-2">
        <img
              className="author_photo"
              src={props.columnItem.author.image1url}
              alt={`Портрет:${props.columnItem.author.fullname}`}
            />
        </div>
        <div className="col-10">
        <PressItem pressItem = {props.columnItem} type="column"/>
        </div>
      </div>
      :""}
    </div>
  );
}

export default ColumnsBlockItem;
