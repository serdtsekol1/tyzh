import React from "react";
import {Link} from "react-router-dom";
import ShowMoreButton from "../common/ShowMoreButton";
import "../fragments/css/authors_block.scss";

function HomeAuthorsBlockItem(props) {
  let author_name =props.columnItem.author.fullnameua.split(" ").reverse().join(" ");
  return (
    <div className={`author-column-link${"-" + props.size}`}>
      
      {props.columnItem.author? 
      <Link to={`/column/${props.columnItem.id}`}>
      <div className="row">
        <div className="col-5">
          <img
            className="author_photo"
            src={props.columnItem.author.image1url}
            alt={`Портрет:${author_name}`}
          />
        </div>
        <div className="col-7">
          <p className="small-author-name">{author_name}</p>
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
