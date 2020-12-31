import React from "react";
import {Link} from "react-router-dom";
import "./css/photo_report.scss";
import PhotosQuantityHolder from "./PhotosQuantityHolder";

function PhotoReportItem(props) {
  let author_name="";
  

  return (
    
    <div className="photo-report-item">
      {props.reportItem? 
        <div>
      <Link to={`/Gallery/${props.reportItem.id}`}>
      <div className="image-cover-wrap">
        <img
          className={ props.main? "main-report-image-cover":"report-image-cover"}
          src={props.reportItem.image1}
          alt={`Зображення:${props.reportItem.title}`}
        />
        <PhotosQuantityHolder quantity={props.reportItem.count} />
      </div>
      </Link>
      <div>
      <Link to={`/Gallery/${props.reportItem.id}`}>
        <p className="photo-report-title ">
          {props.reportItem.title}
        </p>
      </Link>
        {props.reportItem.author?
          <Link to={`/Author/${props.reportItem.author.id}`}><p className="photo-report-author ">
            {props.reportItem.author.fullname2ua}
          </p>
          </Link>
         : "" }
      </div>
     
        </div>
    :""}
    </div>
  );
}

export default PhotoReportItem;
