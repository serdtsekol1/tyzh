import React from "react";
import { Link } from "react-router-dom";
import "../news/news.scss"
import "./css/news_block_item.scss";

function NewsBlockItem(props) {
  return (
    <div className="news-block-item">
      <table>
        <td>
          <p className="news-hours">{props.newsItem.created_ts}</p>
        </td>
        <td>
          <tr>
            <Link to={`/news/${props.newsItem.id}`}>
              <p className="news-title-medium">{props.newsItem.title}</p>
            </Link>
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
