import React from "react";
import { Link } from "react-router-dom";
import "./news.scss"
import "./news_block_item.scss";

function NewsBlockItem(props) {

  let timeOptions = {  hour: 'numeric', minute: 'numeric' };
  let date = new Date(props.newsItem.created_ts).toLocaleTimeString('uK-UK', timeOptions);
  return (
    <div className="news-block-item">
      <table>
        <td>
          <p className="news-hours">{date}</p>
        </td>
        <td>
          <tr>
          <div className="title-wrap">
            {props.newsItem.original ? (
              <img
                className="unique-news"
                src={require("../../images/icons/logo_mini_tyzhden.svg")}
                alt=""
              />
            ) : (
              ""
            )}
            {props.newsItem.photo ? (
              <img
                className="unique-news"
                src={require("../../images/icons/ic-news-photo.svg")}
                alt=""
              />
            ) : (
              ""
             )}
            {props.newsItem.video ? (
              <img
                className="unique-news"
                src={require("../../images/icons/ic-news-video.svg")}
                alt=""
              />
              ) : (
                ""
              )}
            <Link to={`/news/${props.newsItem.id}`}>
              
              <p className="news-title-medium">{props.newsItem.title}</p>

            </Link>
            </div>
          </tr>
          <tr>
            <p className="news-abstract-medium">
              {props.newsItem.abstract}
            </p>
          </tr>
        </td>
      </table>
    </div>
  );
}

export default NewsBlockItem;
