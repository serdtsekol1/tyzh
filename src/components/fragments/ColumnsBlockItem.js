import React from "react";
import PressItem from "./PressItem";
import "../columns/columns.scss";


function ColumnsBlockItem(props) {
  
  return (

    <div>
      {props.columnItem ? 
      <div className="column-item row">
        <div className="col-3 col-md-2">
        <img
              className="author_photo"
              src={props.columnItem.author.image1url}
              alt="Портрет"
            />
        </div>
        <div className="col-9 col-md-10">
        <PressItem pressItem = {props.columnItem} type="column"/>
        </div>
      </div>
      :""}
    </div>
  );
}

export default ColumnsBlockItem;
