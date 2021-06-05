import React from "react";
import Link from "next/link";
import ShowMoreButton from "../common/ShowMoreButton";

function HomeAuthorsBlockItem(props) {
  let author_name =props.columnItem.author.fullname2ua;
  return (
    <div className={`author-column-link${"-" + props.size}`}>
      
      {props.columnItem.author? 
     
      <div className="row">
        <div className="col-5">
        <Link href={`/Author/${props.columnItem.author.id}`}>
          <a>
            <img
              className="author_photo"
              src={props.columnItem.author.image1url}
              alt={`Портрет:${author_name}`}
            />
          </a>
        </Link>
        </div>
        <div className="col-7">
        <Link href={`/Author/${props.columnItem.author.id}`}>
          <a>
            <p className="small-author-name">{author_name}</p>
          </a>
        </Link>
        <Link href={`/Columns/50/${props.columnItem.id}`}>
          <a>
            <p className={`column-title${"-" + props.size}`}>
            {props.columnItem.title}
            </p>
          </a>
        </Link>
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
