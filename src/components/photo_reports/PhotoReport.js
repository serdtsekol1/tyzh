import React, { useState, useEffect} from "react";
import axios from 'axios';
import config from "react-global-configuration";


import PhotoReportTemplate from "./PhotoReportTemplate";

import "react-image-gallery/styles/css/image-gallery.css";
import "../common/css/post.scss";

import SkeletonPublication from "../loading_skeletons/SkeletonPublication";


function PhotoReport({match}){
    let [photoReport, setPhotoReport] = useState({});
  const [loading, setLoading] = useState(false);

    useEffect (()=>{
    setLoading(true);
      
      const fetchData = async () => {
        
        let apiUrl = `${config.get("apiDomain")}/galleries/${match.params.id}`;
        await axios.get(apiUrl)
        .then(res =>{ 
          console.log(res.data);
          setPhotoReport(res.data);
        setLoading(false);

          })
        .catch(err => console.log(err));  
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