import React from "react";
import PressItem from "./PressItem";
import "../columns/columns.scss";


function ColumnsBlockItem(props) {
 
  return (
    <div className="column-item row">
      <div className="col-2">
      <img
            className="author_photo"
            src={require(`../../images/columns/${props.columnItem.author_photo}`)}
            alt={`Портрет:${props.columnItem.author}`}
          />
      </div>
      <div className="col-10">
      <PressItem pressItem = {props.columnItem} type="column"/>
      </div>
    </div>
  );
}

export default ColumnsBlockItem;
