import React from "react";
import {Link} from "react-router-dom";
import ShowMoreButton from "../common/ShowMoreButton";
import "../fragments/css/authors_block.scss";

function HomeAuthorsBlockItem(props) {
  return (
    <div className={`author-column-link${"-" + props.size}`}>
      
      {props.columnItem.author? 
      <Link to={`/columns/${props.columnItem.id}`}>
      <div className="row">
        <div className="col-5">
          <img
            className="author_photo"
            src={props.columnItem.author.image1url}
            alt={`Портрет:${props.columnItem.author.fullnameua}`}
          />
        </div>
        <div className="col-7">
          <p className="small-author-name">{props.columnItem.author.fullnameua}</p>
          <p className={`column-title${"-" + props.size}`}>
            {props.columnItem.title}
          </p>
          {props.size === "small" ? (
            ""
          ) : (
            <ShowMoreButton title="Більше колонок" to="/columns" />
          )}
        </div>
      </div>
      </Link>
      :""}
     
    </div>
  );
}

export default HomeAuthorsBlockItem;
