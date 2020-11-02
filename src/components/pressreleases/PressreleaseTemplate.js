import React, { useState, useEffect}  from "react";
import axios from 'axios';
import config from 'react-global-configuration';

import PublicationAbstract from "../common/PublicationAbstract";
import Parser from "html-react-parser";
import Fragment from "../fragments/Fragment";
import DateAndAuthor from "../fragments/DateAndAuthor";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import PhotosQuantityHolder from "../fragments/PhotosQuantityHolder";
import MetaTags from "../common/MetaTagsComponent";

import "../common/css/post.scss";


import PressreleasesBlock from "../fragments/PressreleasesBlock";
import MagazineMaterial from "../fragments/MagazineMaterial";


function getDate(public_ts){
  const today = new Date();
  let options = { month: 'long', day: 'numeric' ,  timeZone: 'UTC'};
  let date = new Date(public_ts).toLocaleDateString('uK-UK', options);
  if (new Date(public_ts).getYear() < today.getYear()) {
    options = {  year:'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
    date = new Date(public_ts).toLocaleDateString('uK-UK', options);
  }
  return date;
}


function PressreleaseTemplate(props) {
  let thisUrl= window.location.href;


  return (
    <PublicationAbstract publication={props.pressrelease}>
      <div className="container">
        <div className="d-block d-md-none">

        </div>
        {props.pressrelease.location? <p className="author-location author-location-no-margin">{props.pressrelease.location}</p>:""}
        <h1 className="big-post-header ">{props.pressrelease.title}</h1>

        {(props.pressrelease.public_ts) ?
          ( <div className="category-and-date">
            <DateAndAuthor date={getDate(props.pressrelease.public_ts)} author={false} />
          </div>)
          : ""}

        {(props.pressrelease.image1) ?
          <div className="image-cover-wrap">
            <img
              className="main-article-image"
              src={props.pressrelease.image1}
              alt=""
            />
            {props.pressrelease.imageinfo? <PhotosQuantityHolder title={props.pressrelease.imageinfo} />:""}
          </div> : ""
        }

        {props.pressrelease.content? (


          <div className="row">
            <div className="col-12 col-md-9">
              {props.pressrelease.magazine_id?
                <MagazineMaterial magazine_id={props.pressrelease.magazine_id}/>
                :""}
              <p className="article-block-abstract-big">
                {props.pressrelease.abstract}
              </p>
              {/* {props.pressrelease.content? <p>{props.pressrelease.content}</p>:""} */}
              <div className="body-text">

                {Parser(props.pressrelease.content.replace(/<p>&nbsp;<\/p>/g,"").replace(/<br \/>/g,"")
                    .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<p class="read-also"><strong>Читайте також:')
                    .replace(/<\s*li\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<li class="read-also"><strong>Читайте також:')
                    .replace(/<\s*p\s*>\s*<\s*em\s*>\s*Читайте також:/g,'<p><em class="read-also">Читайте також:')
                    .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читай також:/g,'<p class="read-also"><strong>Читайте також:')
                    .replace(/<\s*p\s*>\s*<\s*b\s*>\s*Читайте також:/g,'<p class="read-also"><b>Читайте також:')
                    .replace("https://new.tyzhden.ua/Publications/","https://tyzhden.ua/")
                  // .replace(/<\s*p\s*>\s*<\s*strong\s*>([А-яIi ]+)<\s*strong\s*><\s*p\s*>/g,'<p class="mini-header"><strong>$1<strong><p>')

                  , {
                    // replace: domNode => {
                    //   if (domNode.name === "em") {
                    //     return <strong>bar</strong>;
                    //   }
                    // }
                  })}
              </div>
              {/* <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p> */}
              {props.pressrelease.tags?
                <TagsPanel tags={props.pressrelease.tags.split(",")} />
                :""}

              <div className="shared-flex">
                {/* <p className="quantity-label">
              Поділилося: <b>18 осіб</b>
            </p> */}
                <SocialNetworks shareFb={true} shareTwitter={true} shareLink={thisUrl} shareText={props.pressrelease.title} color="red" />
              </div>
              <GorizontalAdBanner adpartner={true} ukrnet={true} mixadvert={true} redTram={true} randomBoolean={(Math.random() >= 0.5)} yottos={true}/>
              <div className="d-block d-md-none">
                {/* <BannersPanel ria={true} /> */}
              </div>

              <Header size="big" title="Bам також буде цікаво почитати" />
              <PressreleasesBlock quantity={3} pressreleases={props.pressrelease.more} showMoreLink="/PressReleases" />
            </div>
            <div className="d-none d-md-block col-md-3">
              <ShareBySocialNetworks shareFb={true} shareTwitter={true} shareLink={thisUrl} shareText={props.pressrelease.title} quantity={12} />
              <BannersPanel moxTV={true} moxTV_id="moxTV_pressrelease" admixer_id="admixed-article" admixer={true} />
            </div>
          </div>
        ):""}
      </div>
    </PublicationAbstract>

  );
}

export default PressreleaseTemplate;
