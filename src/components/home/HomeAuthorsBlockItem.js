import React from "react";
import {Link} from "react-router-dom";
import ShowMoreButton from "../common/ShowMoreButton";
import "../fragments/css/authors_block.scss";

function HomeAuthorsBlockItem(props) {
  let author_name =props.columnItem.author.fullnameua;
  return (
    <div className={`author-column-link${"-" + props.size}`}>
      
      {props.columnItem.author? 
      <Link to={`/Column/${props.columnItem.id}`}>
      <div className="row">
        <div className="col-5">
          <img
            className="author_photo"
            src={props.columnItem.author.image1url}
            alt={`Портрет:${author_name}`}
          />
        </div>
        <div className="col-7">
        <Link to={`/author/${props.columnItem.author.id}`}><p className="small-author-name">{author_name}</p></Link>
          <p className={`column-title${"-" + props.size}`}>
            {props.columnItem.title}
          </p>
          {props.size === "small" ? (
            ""
          ) : (
         
            <ShowMoreButton title="Більше колонок" to={`/author/${props.columnItem.author.id}`} />
          )}
        </div>
      </div>
      </Link>
      :""}
     
    </div>
  );
}

export default HomeAuthorsBlockItem;
