import React from "react";
import {Link} from "react-router-dom";
import PressItem from "./PressItem";
import "../columns/columns.scss";
import CategoryLink from "./CategoryLink";


function ColumnsBlockItem(props) {
  
  return (

    <div>
      {props.columnItem ? 
      <div className={props.reverse? "flex-row-reverse column-item row":"column-item row"}>
        {props.noneImage?"":
          <div className={props.reverse? "col-3 col-md-4" : "col-3 col-md-2" }>
          <Link to={`/Author/${props.columnItem.author.id}`}><img
                className="author_photo"
                src={props.columnItem.author.image1url}
                alt="Портрет"
              />
            </Link>
          </div>
        }
       
        <div className={props.noneImage?"col-12":props.reverse?"col-9 col-md-8":"col-9 col-md-10"}>
        {props.reverse? <CategoryLink columnsLink={true} categoryInfo={{journal:{nameua:"Колонки"}}}/>:""}
          <div className={props.reverse?"articlesInfo":""}>
            <PressItem pressItem = {props.columnItem} type="Columns"/>
          </div>
        </div>
      </div>
      :""}
    </div>
  );
}

export default ColumnsBlockItem;
