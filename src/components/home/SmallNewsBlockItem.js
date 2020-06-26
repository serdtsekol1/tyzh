import React from "react";
import { Link } from "react-router-dom";
import DateAndAuthor from "../fragments/DateAndAuthor";
import "../news/news.scss";

function NewsBlockItem(props) {
  
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
        date={props.newsItem.date}
        author={props.newsItem.author}
      />
    </div>
  );
}

export default NewsBlockItem;
