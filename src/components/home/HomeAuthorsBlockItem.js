import React from "react";
import {Link} from "react-router-dom";
import ShowMoreButton from "../common/ShowMoreButton";
import "../fragments/css/authors_block.scss";

function HomeAuthorsBlockItem(props) {
  let author_name =props.columnItem.author.fullname2ua;
  return (
    <div className={`author-column-link${"-" + props.size}`}>
      
      {props.columnItem.author? 
     
      <div className="row">
        <div className="col-5">
        <Link to={`/Author/${props.columnItem.author.id}`}><img
            className="author_photo"
            src={props.columnItem.author.image1url}
            alt={`Портрет:${author_name}`}
          /></Link>
        </div>
        <div className="col-7">
        <Link to={`/Author/${props.columnItem.author.id}`}><p className="small-author-name">{author_name}</p></Link>
        <Link to={`/Columns/${props.columnItem.id}`}><p className={`column-title${"-" + props.size}`}>
            {props.columnItem.title}
          </p></Link>
          {props.size === "small" ? (
            ""
          ) : (
         
            <ShowMoreButton title="Більше колонок" to={`/Author/${props.columnItem.author.id}`} />
          )}
        </div>
      </div>
     
      :""}
     
    </div>
  );
}

export default HomeAuthorsBlockItem;
