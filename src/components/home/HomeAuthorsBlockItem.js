import React from "react";
import ShowMoreButton from "../common/ShowMoreButton";
import "../fragments/css/authors_block.scss";

function HomeAuthorsBlockItem(props) {
  return (
    <div className={`author-column-link${"-" + props.size}`}>
      <div className="row">
        <div className="col-5">
          <img
            className="author_photo"
            src={require(`../../images/columns/${props.columnItem.author_photo}`)}
            alt={`Портрет:${props.columnItem.author}`}
          />
        </div>
        <div className="col-7">
          <p className="small-author-name">{props.columnItem.author}</p>
          <p className={`column-title${"-" + props.size}`}>
            {props.columnItem.title}
          </p>
          {props.size === "small" ? (
            ""
          ) : (
            <ShowMoreButton title="Більше колонок" to="#" />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeAuthorsBlockItem;
