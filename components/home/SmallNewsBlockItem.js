import React from "react";
import { Link } from "react-router-dom";
import DateAndAuthor from "../fragments/DateAndAuthor";
import "../news/news.scss";

function SmallNewsBlockItem(props) {
  const today = new Date();
  // today.setDate(today.getDate() - 5);
  let options = {  hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
  if (new Date(props.newsItem.public_ts).getDate() === today.getDate()) options = {  hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
    

  return (
    <div className="news-item-small">
      <div className="title-wrap">
        {props.newsItem.original ? (
          <img
            className="unique-news unique-news-small"
            src={require("../../images/icons/logo_mini_tyzhden.svg")}
            alt=""
          />
        ) : (
          ""
        )}
        {props.newsItem.photo ? (
          <img
            className="unique-news unique-news-small"
            src={require("../../images/icons/ic-news-photo.svg")}
            alt=""
          />
        ) : (
          ""
        )}
        {props.newsItem.video ? (
          <img
            className="unique-news unique-news-small"
            src={require("../../images/icons/ic-news-video.svg")}
            alt=""
          />
        ) : (
          ""
        )}

        <Link to={`/News/${props.newsItem.id}`}>
          <p className="news-title">{props.newsItem.title}</p>
        </Link>
      </div>
      <DateAndAuthor
        date={new Date(props.newsItem.public_ts).toLocaleTimeString('uK-UK', options)}
        author={props.newsItem.authors}
      />
    </div>
  );
}

export default SmallNewsBlockItem;
