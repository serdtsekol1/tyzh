import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

import Parser from "html-react-parser";
import DateAndAuthor from "../fragments/DateAndAuthor";
import ShareBySocialNetworks from "../fragments/ShareBySocialNetworks";
import BannersPanel from "../fragments/BannersPanel";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";
import SocialNetworks from "../common/SocialNetworks";
import TagsPanel from "../fragments/TagsPanel";
import Header from "../common/Header";
import ColumnsBlock from "../fragments/ColumsBlock";
import PublicationAbstract from "../common/PublicationAbstract";
import MagazineMaterial from "../fragments/MagazineMaterial";
import PatreonPopup from "../common/PatreonPopup";


function getDate(public_ts){
  let today = new Date();
  let options = { month: 'long', day: 'numeric', timeZone: 'UTC'};
  let date = "";
  if (public_ts) {
    date = new Date(public_ts).toLocaleDateString('uK-UK', options);

    if (new Date(public_ts).getDate() === today.getDate() && new Date(public_ts).getMonth() === today.getMonth() && new Date(public_ts).getFullYear() === today.getFullYear()) {
      options = {  hour: 'numeric', minute: 'numeric',  timeZone: 'UTC'};
      date = new Date(public_ts).toLocaleTimeString('uK-UK', options);
      date = `Cьогодні, ${date}`;
    }
    if (new Date(public_ts).getYear() < today.getYear()) {
      options = {  year:'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
      date = new Date(public_ts).toLocaleDateString('uK-UK', options);
    }
  }
  return date;
}

function ColumnTemplate(props){

  const { query } = useRouter();
  let thisUrl= `${process.env.domain}/Columns/50/${query.id}`;

  let columnItem = props.columnItem;
  let author_name = columnItem.author?columnItem.author.fullname2ua:"";

  let tags = columnItem.tags? columnItem.tags.split(","):[];

  return (
    <PublicationAbstract publication={columnItem}>
    <PatreonPopup />
    <div className="container">

    {columnItem.author?
      <div className="row column-header">
      <div className="col-3 col-md-2">
      <div className="column-author-photo-wrap">
      <img className="column-author-photo" 
      src={columnItem.author.image1url} alt="Фото автора"/>
      </div>
      </div>

      <div className="col-9 col-md-10 d-none d-md-block">
      <div className="column-author-info">
      <Link href={`/Author/${columnItem.author.id}`}>
      <a>
      <p className="red-link column-author-name">{author_name}</p>
      </a>
      </Link>
      {columnItem.location? <p className="author-location">{columnItem.location}</p>:""}
      <p className="big-post-header column-title ">{columnItem.title}</p>
      <div className="column-date">
      <DateAndAuthor date={getDate(columnItem.public_ts)} />
      </div>
      </div>
      </div>
      <div className="col-9 col-md-10 d-block d-md-none">
      <div className="mobile-column-author-info">
      <p className="column-author-name">{author_name}</p>

      </div>
      </div>
      </div>
      :""}
    <div className="row">

    <div className="col-12 col-md-9">
    <div className="column-mobile d-block d-md-none">
    <p className="big-post-header news-header  ">{columnItem.title}</p>
    <div className="news-date">
    <DateAndAuthor date={getDate(columnItem.public_ts)} />
    </div>
    </div>

    {columnItem.magazine_id?
      <MagazineMaterial magazine_id={columnItem.magazine_id}/>
      :""}

    <p className="article-block-abstract-big">{columnItem.abstract}</p>

    {columnItem.content?

      <div className="body-text">
      {Parser(columnItem.content.replace(/<p>&nbsp;<\/p>/g,"").replace(/<br \/>/g,"")
        .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<p class="read-also"><strong>Читайте також:')
        .replace(/<\s*li\s*>\s*<\s*strong\s*>\s*Читайте також:/g,'<li class="read-also"><strong>Читайте також:')
        .replace(/<\s*p\s*>\s*<\s*em\s*>\s*Читайте також:/g,'<p><em class="read-also">Читайте також:')
        .replace(/<\s*p\s*>\s*<\s*strong\s*>\s*Читай також:/g,'<p class="read-also"><strong>Читайте також:')
        .replace(/<\s*p\s*>\s*<\s*b\s*>\s*Читайте також:/g,'<p class="read-also"><b>Читайте також:')
        .replace("https://new.tyzhden.ua/Publications/","https://tyzhden.ua/")
        // .replace(/<\s*p\s*>\s*<\s*strong\s*>/g,'<p class="mini-header"><strong>')
        , {
          // replace: domNode => {
          //   if (domNode.name === "em") {
          //     return <strong>bar</strong>;
          //   }
          // }
        })}
      </div>:""}

    {/* <p className="notice-mistake d-none d-md-block">
            Якщо ви помітили помилку, виділіть необходіний текст і натисніть
            CTRL + ENTER, щоб повідомити про це редакцію.
          </p> */}
    {/* <p className="source-label">
            Джерело: <a href={columnItem.source_url}>{columnItem.source}</a>
          </p> */}
    <TagsPanel tags={tags} />
    <div className="shared-flex">
    {/* <p className="quantity-label">
              Поділилося: <b>18 осіб</b>
            </p> */}
    <SocialNetworks shareFb={true} shareTwitter={true} shareLink={thisUrl} shareText={columnItem.title} color="red" />
    </div>
    <GorizontalAdBanner mox={true} adpartner={true} mixadvert={true} redTram={true} randomBoolean={(Math.random() >= 0.5)} yottos={true}/>

    <div className="d-block d-md-none">
    <BannersPanel my={true} ria={true}  />
    </div>


    <Header size="big" title="Bам також буде цікаво почитати" />
    {columnItem.more?
      <ColumnsBlock showMoreLink="/Columns" columns={columnItem.more} quantity={3} size="big"/>
      :""}

    </div>
    <div className="d-none d-md-block col-md-3">
    <ShareBySocialNetworks shareFb={true} shareTwitter={true} shareLink={thisUrl} shareText={columnItem.title} quantity={14} />
    <BannersPanel  my={true} adriver_id="adriver-column" adriver={true} admixer_id="admixed-column" admixer={true}  ria={true} />
    </div>
    </div>
    </div>
    </PublicationAbstract>
  );
}

export default ColumnTemplate;
