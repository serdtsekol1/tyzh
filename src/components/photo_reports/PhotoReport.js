import React, { useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";


import PhotoReportTemplate from "./PhotoReportTemplate";

import "react-image-gallery/styles/css/image-gallery.css";
import "../common/css/post.scss";

import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import {setCookie, getCookie} from "../../lib/simpleCookieLib"

function PhotoReport({match}){
    let [photoReport, setPhotoReport] = useState({});
  const [loading, setLoading] = useState(false);
    let history=useHistory();
    useEffect (()=>{
    setLoading(true);

    const increaseStatCounter = async () => {
        let path = `/news/galleries/${match.params.id}`;
        let fullUrl = `${config.get("apiDomain")}${path}`;
        if(!getCookie(`galleries_stats_${match.params.id}`)) {
            setCookie(`galleries_stats_${match.params.id}`, true, 1, fullUrl);
            await axios.put(fullUrl)
                .catch(err => console.log(err));
        }
    };
    increaseStatCounter();
      
    const fetchData = async () => {

      let apiUrl = `${config.get("apiDomain")}/galleries/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{

        setPhotoReport(res.data);
      setLoading(false);

        })
      .catch(err =>  history.push("/page-not-found"));
      };
      fetchData();
      
    },[match.params.id]);
    
  
    return (    
      <div>
    {loading && <SkeletonPublication article={true}/>}
       {!loading &&
        <PhotoReportTemplate photoReport={photoReport}/>
       }</div>
    );
}

export default PhotoReport;