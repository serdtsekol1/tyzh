import React from "react";


import DateAndAuthor from "../fragments/DateAndAuthor";
import PhotosQuantityHolder from "../fragments/PhotosQuantityHolder";
import ImageGallery from 'react-image-gallery';
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import PhotoReportItem from "../fragments/PhotoReportItem";
import BannersPanel from "../fragments/BannersPanel";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import Fragment from "../fragments/Fragment";
import PublicationAbstract from "../common/PublicationAbstract";

import "react-image-gallery/styles/css/image-gallery.css";
import "../common/css/post.scss";



function getDate(public_ts){
  let today = new Date();
  let options = {  hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric',  timeZone: 'UTC'};
  let date = "";
  if (public_ts) {
    date = new Date(public_ts).toLocaleTimeString('uK-UK', options);

    if (new Date(public_ts).getDate() === today.getDate() && new Date(public_ts).getMonth() === today.getMonth() && new Date(public_ts).getFullYear() === today.getFullYear()) {
      options = {  hour: 'numeric', minute: 'numeric',  timeZone: 'UTC'};
      date = new Date(public_ts).toLocaleTimeString('uK-UK', options);
      date = `Cьогодні, ${date}`;
    }
 
  if (new Date(public_ts).getYear() < today.getYear()) {
      options = { year:'numeric',hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
      date = new Date(public_ts).toLocaleTimeString('uK-UK', options);
    }
  }
  return date;
}


function PhotoReportTemplate(props){
   let photoReport = props.photoReport;
  
   let authors = photoReport.author? [photoReport.author]:[];
 
  
    
    const images = photoReport.items? photoReport.items.map(image => {
        return {"original": image.image,
        "thumbnail": image.preview}}):[];
    const link = "Gallery";
    const photoReportsComponents = photoReport.more? photoReport.more.map(photoReport => (
        <div className="col-12 col-md-6" key={photoReport.id+100}>
            <PhotoReportItem key={photoReport.id} reportItem={photoReport} link={link} />
        </div>
        )):"";
    return (    
      <PublicationAbstract publication={photoReport}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="big-post-header news-header ">{photoReport.title}</p>
                </div>
                <div className="col-10">
               
                    <div className="news-date">
                     
                        <DateAndAuthor date={getDate(photoReport.public_ts)} author={authors}/>
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
         
            {/* <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p> */}
          
          <TagsPanel tags={photoReport.tags? photoReport.tags.split(","):[]} />
         
          <div className="shared-flex">
            {/* <p className="quantity-label">
              Поділилося: <b>{12} осіб</b>
            </p> */}
            <SocialNetworks shareFb={true} shareTwitter={true} shareLink={window.location.href} shareText={photoReport.title} color="red" />
          </div>
          <SubscriptionBanner />
          <GorizontalAdBanner />
          <div className="d-block d-md-none">
            <BannersPanel  admixer_id="admixed-photo-report" admixer={true} ria={true} adriver={true} adriver_id="adriver-photo-report"  />
          </div>
        <Fragment size="big" showMoreLink="/Gallery">
          <Header size="big" title="Bам також буде цікаво почитати" />
          <div className="row">
             {photoReportsComponents}
          </div>
        </Fragment>
        </div>
        </PublicationAbstract>
    );
}

export default PhotoReportTemplate;
