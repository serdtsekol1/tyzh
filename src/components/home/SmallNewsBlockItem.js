import React from "react";
import { Link } from "react-router-dom";
import DateAndAuthor from "../fragments/DateAndAuthor";
import "../news/news.scss";

function SmallNewsBlockItem(props) {
  const today = new Date();
  let options = {  hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric'};
  if (props.newsItem.created_ts === today.getDate()) options = {  hour: 'numeric', minute: 'numeric'};
    

  return (
    <div className="news-item-small">
      <div className="title-wrap">
        {props.newsItem.is_unique ? (
          <img
            className="unique-news"
            src={require("../../images/icons/logo_mini_tyzhden.svg")}
            alt="Унікальна новина"
          />
        ) : (
          ""
        )}

        <Link to={`/news/${props.newsItem.id}`}>
          <p className="news-title">{props.newsItem.title}</p>
        </Link>
      </div>
      <DateAndAuthor
        date={new Date(props.newsItem.created_ts).toLocaleTimeString('uK-UK', options)}
        author={props.newsItem.author}
      />
    </div>
  );
}

export default SmallNewsBlockItem;
