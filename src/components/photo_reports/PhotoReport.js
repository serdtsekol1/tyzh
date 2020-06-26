import React from "react";

import DateAndAuthor from "../fragments/DateAndAuthor";
import PhotosQuantityHolder from "../fragments/PhotosQuantityHolder";
import ImageGallery from 'react-image-gallery';
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import PhotoReportItem from "../fragments/PhotoReportItem";
import BannersPanel from "../fragments/BannersPanel";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import Fragment from "../fragments/Fragment";

import "react-image-gallery/styles/css/image-gallery.css";
import "../common/css/post.scss";
import photoReportData from "../photoReportData.json";

function PhotoReport({match}){
    
    const photoReport = photoReportData.find(photoReport => photoReport.id == match.params.id);
    const images = photoReport.images.map(image => {
        return {"original": require(`../../images/photo_report/${image}`),
        "thumbnail": require(`../../images/photo_report/${image}`)}});
    const photoReportsComponents = photoReportData.slice(1,5).map(photoReport => (
        <div className="col-12 col-md-6" key={photoReport.id+100}>
            <PhotoReportItem key={photoReport.id} reportItem={photoReport}/>
        </div>
        ));
    return (    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="big-post-header news-header ">{photoReport.photo_report_title}</p>
                </div>
                <div className="col-10">
                    <div className="news-date">
                        <DateAndAuthor date={photoReport.date} author={photoReport.author}/>
                    </div>
                </div>
                <div className="d-none d-md-block col-md-2 text-right">
                    <PhotosQuantityHolder quantity={photoReport.images_quantity} noFrame={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1">
                     <p className="article-block-abstract-big">{photoReport.abstract}</p>
                 </div>
            </div>
           
            <ImageGallery className="image-gallery" items={images} />
         
            <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p>
          <TagsPanel tags={photoReport.tags} />
          <div class="shared-flex">
            <p className="quantity-label">
              Поділилося: <b>{photoReport.shared_quantity} осіб</b>
            </p>
            <SocialNetworks color="red" />
          </div>
          <SubscriptionBanner />
          <div className="d-block d-md-none">
            <BannersPanel />
          </div>
        <Fragment size="big" showMoreLink="/photoreports">
          <Header size="big" title="Bам також буде цікаво почитати" />
          <div className="row">
             {photoReportsComponents}
          </div>
        </Fragment>
        </div>
    );
}

export default PhotoReport;