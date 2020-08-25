import React from "react";
import {Link} from "react-router-dom";
import PressItem from "./PressItem";
import "../columns/columns.scss";


function ColumnsBlockItem(props) {
  
  return (

    <div>
      {props.columnItem ? 
      <div className={props.reverse? "flex-row-reverse column-item row":"column-item row"}>
        {props.noneImage?"":
          <div className="col-3 col-md-2">
          <Link to={`/Author/${props.columnItem.author.id}`}><img
                className="author_photo"
                src={props.columnItem.author.image1url}
                alt="Портрет"
              />
            </Link>
          </div>
        }
        
        <div className={props.noneImage?"col-12":"col-9 col-md-10"}>
        <PressItem pressItem = {props.columnItem} type="Columns"/>
        </div>
      </div>
      :""}
    </div>
  );
}

export default ColumnsBlockItem;
