import React from "react";
import ShowMoreButton from "../common/ShowMoreButton";
import "./authors_block.scss";

function AuthorsBlockItem(props) {
  return (
    <div className={`author-column-link${"-" + props.size}`}>
      <div className="row">
        <div className="col-5">
          <img
            className="author_photo"
            src={require(`../../images/columns/${props.columnItem.author_photo}`)}
            alt={`Портрет:${props.columnItem.author_name}`}
          />
        </div>
        <div className="col-7">
          <p className="author-name">{props.columnItem.author_name}</p>
          <p className={`column-title${"-" + props.size}`}>
            {props.columnItem.column_title}
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

export default AuthorsBlockItem;
