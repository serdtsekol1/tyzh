import React from "react";
import MetaTags from 'react-meta-tags';
import { useState, useEffect } from "react";
import ScriptTag from "react-script-tag";

function MetaTagsComponent(props) {
    const [article, setArticle] = useState({});
    let cannonical = window.location.href.replace("new.","").replace(/page=(\d)*/,"").replace("Publications/","")
    return (
        <div className="meta">
           
          <MetaTags>  

            <link rel="canonical" href={cannonical} />
            
            <meta id="ctl00_meta1" name="description" content={props.ct100?props.abstract:"Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі"}/>
            <meta id="ctl00_meta2" name="keywords" content={props.keywords?props.keywords:"Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі"} />
            <meta property="fb:app_id" content="966242223397117" /> 
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href?window.location.href:`https://tyzhden.ua/`} />
            <meta property="og:title" content={props.title? props.title:"Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі - Український тиждень, Тиждень.ua"} />
            <meta property="og:description" content={props.abstract? props.abstract:"Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі - Український тиждень, Тиждень.ua"} />
            {props.noImage?"":<meta property="og:image" content={props.image? props.image:"https://tyzhden.ua/main2/images/logo.jpg"} />}
            {props.noImage?"":<meta property="og:image:width" content="250" />}
            {props.noImage?"":<meta property="og:image:height" content="235" />}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content={window.location.href?window.location.href:`https://tyzhden.ua/`} />
            <meta name="twitter:title" content={props.title? props.title: "Новини політики, економіки та культури, новини в світі - Український тиждень"} />
            <meta property="article:publisher" content="https://www.facebook.com/tyzhdenUA/" />
            <title>{props.title? props.title: "Новини політики, економіки та культури, новини в світі - Український тиждень"}</title>
          </MetaTags>
        </div>
    );
}

export default MetaTagsComponent;
