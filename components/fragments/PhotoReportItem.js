import React from "react";
import Link from "next/link";
import PhotosQuantityHolder from "./PhotosQuantityHolder";

function PhotoReportItem(props) {

  return (
    <div className="photo-report-item">
      {props.reportItem?
        <div>
      <Link href={`/${props.link}/${props.reportItem.id}`}>
        <a>
          <div className="image-cover-wrap">
            <img
              className={ props.main? "main-report-image-cover":"report-image-cover"}
              src={props.reportItem.image1}
              alt={`Зображення:${props.reportItem.title}`}
            />
          {props.link === "Gallery" ?
            <PhotosQuantityHolder quantity={props.reportItem.count} />
             : "" }
          </div>
        </a>
      </Link>
      <div>
      <Link href={`/${props.link}/${props.reportItem.id}`}>
        <a>
          <p className="photo-report-title ">
            {props.reportItem.title}
          </p>
        </a>
      </Link>
        {props.reportItem.author?
          <Link href={`/Author/${props.reportItem.author.id}`}>
            <a>
              <p className="photo-report-author ">
                {props.reportItem.author.fullname2ua}
              </p>
            </a>
          </Link>
         : "" }
      </div>
        </div>
    :""}
    </div>
  );
}

export default PhotoReportItem;
