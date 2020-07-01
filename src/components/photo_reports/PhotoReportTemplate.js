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


function PhotoReportTemplate(props){
   let photoReport = props.photoReport;
   let today = new Date();
   let options = {  hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric'};
   let date = "";
   if (photoReport.created_ts) {
     date = new Date(photoReport.created_ts).toLocaleTimeString('uK-UK', options);

     if (new Date(photoReport.created_ts).getDate() === today.getDate()) {
       options = {  hour: 'numeric', minute: 'numeric'};
       date = new Date(photoReport.created_ts).toLocaleTimeString('uK-UK', options);
       date = `Cьогодні, ${date}`;
     }
    }
    
    const images = photoReport.items? photoReport.items.map(image => {
        return {"original": image.image,
        "thumbnail": image.preview}}):[];
    const photoReportsComponents = photoReport.more? photoReport.more.map(photoReport => (
        <div className="col-12 col-md-6" key={photoReport.id+100}>
            <PhotoReportItem key={photoReport.id} reportItem={photoReport}/>
        </div>
        )):"";
    return (    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="big-post-header news-header ">{photoReport.title}</p>
                </div>
                <div className="col-10">
                    <div className="news-date">
                        <DateAndAuthor date={date} author={photoReport.author? photoReport.author.fullname: ""}/>
                    </div>
                </div>
                <div className="d-none d-md-block col-md-2 text-right">
                    <PhotosQuantityHolder quantity={photoReport.count} noFrame={true}/>
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
          
          <TagsPanel tags={photoReport.tags? photoReport.tags.split(","):[]} />
         
          <div class="shared-flex">
            <p className="quantity-label">
              Поділилося: <b>{12} осіб</b>
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

export default PhotoReportTemplate;