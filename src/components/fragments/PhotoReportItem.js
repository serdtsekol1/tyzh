import React from "react";
import "./css/photo_report.scss";
import PhotosQuantityHolder from "./PhotosQuantityHolder";

function PhotoReportItem(props) {
  return (
    <div>
      <div className="image-cover-wrap">
        <img
          className="report-image-cover"
          src={require(`../../images/photo_report/${props.reportItem.images[0]}`)}
          alt={`Зображення:${props.reportItem.photo_report_title}`}
        />
        <PhotosQuantityHolder quantity={props.reportItem.images_quantity} />
      </div>

      <p className="photo-report-title d-none d-md-block">
        {props.reportItem.photo_report_title}
      </p>
      <p className="photo-report-author d-none d-md-block">
        {props.reportItem.author}
      </p>
    </div>
  );
}

export default PhotoReportItem;
