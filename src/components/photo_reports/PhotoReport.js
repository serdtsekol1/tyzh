import React, { useState, useEffect} from "react";
import axios from 'axios';
import config from "react-global-configuration";


import PhotoReportTemplate from "./PhotoReportTemplate";

import "react-image-gallery/styles/css/image-gallery.css";
import "../common/css/post.scss";
import photoReportData from "../photoReportData.json";

function PhotoReport({match}){
    let [photoReport, setPhotoReport] = useState({});
    useEffect (()=>{
      const fetchData = async () => {
        
        let apiUrl = `${config.get("apiDomain")}/galleries/${match.params.id}`;
        await axios.get(apiUrl)
        .then(res =>{ 
          console.log(res.data);
          setPhotoReport(res.data);
          })
        .catch(err => console.log(err));  
        };
        fetchData();
      
    },[match.params.id]);
    
  
    return (    
        <PhotoReportTemplate photoReport={photoReport}/>
    );
}

export default PhotoReport;