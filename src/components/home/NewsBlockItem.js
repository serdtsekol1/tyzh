import React from "react";
import DateAndAuthor from "../fragments/DateAndAuthor";
import "./news.scss";

function NewsBlockItem(props) {
  console.log(props);
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

        <p className="news-title">{props.newsItem.news_title}</p>
      </div>
      <DateAndAuthor
        date={props.newsItem.date}
        author={props.newsItem.author}
      />
    </div>
  );
}

export default NewsBlockItem;
