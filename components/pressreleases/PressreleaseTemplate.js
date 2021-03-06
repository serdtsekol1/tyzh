import React  from "react";
import {useRouter} from "next/router";

import PublicationAbstract from "../common/PublicationAbstract";
import Parser from "html-react-parser";
import DateAndAuthor from "../fragments/DateAndAuthor";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import PhotosQuantityHolder from "../fragments/PhotosQuantityHolder";


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
  const { query } = useRouter();
  let thisUrl = `${process.env.domain}/PressReleases/${query.id}`;

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
                    .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*?????????????? ??????????:/g,'<p class="read-also"><strong>?????????????? ??????????:')
                    .replace(/<\s*li\s*>\s*<\s*strong\s*>\s*?????????????? ??????????:/g,'<li class="read-also"><strong>?????????????? ??????????:')
                    .replace(/<\s*p\s*>\s*<\s*em\s*>\s*?????????????? ??????????:/g,'<p><em class="read-also">?????????????? ??????????:')
                    .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*?????????? ??????????:/g,'<p class="read-also"><strong>?????????????? ??????????:')
                    .replace(/<\s*p\s*>\s*<\s*b\s*>\s*?????????????? ??????????:/g,'<p class="read-also"><b>?????????????? ??????????:')
                    .replace(/<p>b\[<a href="[^\n]+">([^\n]+)<\/a>\]([^\n]+)<\/p>/g,'<p class="text-center"><button class="button-default"><a href="$1">$2</a></button><p>')
                    .replace("https://new.tyzhden.ua/Publications/","https://tyzhden.ua/")
                  // .replace(/<\s*p\s*>\s*<\s*strong\s*>([??-??Ii ]+)<\s*strong\s*><\s*p\s*>/g,'<p class="mini-header"><strong>$1<strong><p>')

                  , {
                    // replace: domNode => {
                    //   if (domNode.name === "em") {
                    //     return <strong>bar</strong>;
                    //   }
                    // }
                  })}
              </div>
              {/* <p className="notice-mistake d-none d-md-block">
            ???????? ???? ???????????????? ??????????????, ???????????????? ?????????????????????? ?????????? ?? ??????????????????
            CTRL + ENTER, ?????? ???????????????????? ?????? ???? ????????????????.
          </p> */}
              {props.pressrelease.tags?
                <TagsPanel tags={props.pressrelease.tags.split(",")} />
                :""}

              <div className="shared-flex">
                {/* <p className="quantity-label">
              ????????????????????: <b>18 ????????</b>
            </p> */}
                <SocialNetworks shareFb={true} shareTwitter={true} shareLink={thisUrl} shareText={props.pressrelease.title} color="red" />
              </div>
              <GorizontalAdBanner adpartner={true} mixadvert={true} redTram={true} randomBoolean={(Math.random() >= 0.5)} yottos={true}/>
              <div className="d-block d-md-none">
                {/* <BannersPanel ria={true} /> */}
              </div>

              <Header size="big" title="B???? ?????????? ???????? ???????????? ????????????????" />
              <PressreleasesBlock quantity={3} pressreleases={props.pressrelease.more} showMoreLink="/PressReleases" />
            </div>
            <div className="d-none d-md-block col-md-3">
              <ShareBySocialNetworks shareFb={true} shareTwitter={true} shareLink={thisUrl} shareText={props.pressrelease.title} quantity={12} />
              <BannersPanel moxTV={false} moxTV_id="moxTV_pressrelease" admixer_id="admixed-article" admixer={true} />
            </div>
          </div>
        ):""}
      </div>
    </PublicationAbstract>

  );
}

export default PressreleaseTemplate;
