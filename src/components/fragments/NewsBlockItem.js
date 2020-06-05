import React from "react";
import { Link } from "react-router-dom";
import "../news/news.scss"
import "./css/news_block_item.scss";

function NewsBlockItem(props) {
  return (
    <div className="news-block-item">
      <table>
        <td>
          <p className="news-hours">{props.newsItem.date}</p>
        </td>
        <td>
          <tr>
            <Link to={`/news/${props.newsItem.id}`}>
              <p className="news-title-medium">{props.newsItem.news_title}</p>
            </Link>
          </tr>
          <tr>
            <p className="news-abstract-medium">
              {props.newsItem.news_abstract}
            </p>
          </tr>
        </td>
      </table>
    </div>
  );
}

export default NewsBlockItem;
