import React from "react";
import Link from "next/link";
import "./news.scss"
import "./news_block_item.scss";

function NewsBlockItem(props) {

  let timeOptions = {  hour: 'numeric', minute: 'numeric',  timeZone: 'UTC' };
  let date = new Date(props.newsItem.public_ts).toLocaleTimeString('uK-UK', timeOptions);
  return (
    <div className="news-block-item">
      <table>
        {props.noTime?"":
        <td>
          <p className="news-hours">{date}</p>
        </td>
        }
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
            <Link href={`/News/${props.newsItem.id}`}>
              <a>
                <p className="news-title-medium">{props.newsItem.title}</p>
              </a>
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
