import React from "react";
import {Link} from "react-router-dom";
import "./css/photo_report.scss";
import PhotosQuantityHolder from "./PhotosQuantityHolder";

function PhotoReportItem(props) {
  let author_name="";
  if (props.reportItem) {
    author_name = props.reportItem.author? props.reportItem.author.fullnameua.split(" ").reverse().join(" "):"";
  } 

  return (
    
    <div className="photo-report-item">
      {props.reportItem? 
      <Link to={`/photoreport/${props.reportItem.id}`}>
      <div className="image-cover-wrap">
        <img
          className={ props.main? "main-report-image-cover":"report-image-cover"}
          src={props.reportItem.image1}
          alt={`Зображення:${props.reportItem.title}`}
        />
        <PhotosQuantityHolder quantity={props.reportItem.count} />
      </div>
      <div>
        <p className="photo-report-title ">
          {props.reportItem.title}
        </p>
        {props.reportItem.author?
        <p className="photo-report-author ">
          {author_name}
        </p>
         : "" }
      </div>
     
      </Link>
    :""}
    </div>
  );
}

export default PhotoReportItem;
