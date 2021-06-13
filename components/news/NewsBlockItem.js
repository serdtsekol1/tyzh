import React from "react";
import Link from "next/link";
import Image from 'next/image'


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
              <Image
                className="unique-news"
                src="/images/icons/logo_mini_tyzhden.svg"
                alt="Іконка: унікальні новини"
              />
            ) : (
              ""
            )}
            {props.newsItem.photo ? (
              <Image
                className="unique-news"
                src="images/icons/ic-news-photo.svg"
                alt="Іконка: новина з фото"
              />
            ) : (
              ""
             )}
            {props.newsItem.video ? (
              <Image
                className="unique-news"
                src="images/icons/ic-news-video.svg"
                alt="Іконка: новина з фото"
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
