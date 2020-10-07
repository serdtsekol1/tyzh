import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";

import Parser from "html-react-parser";
import "./video.scss";


function VideoTranslation(props) {
  
  return (
    <div className="video-translation">
        {props.videoTranslation.value?
         <div>
            {Parser(props.videoTranslation.value,{})}
            <p className="video-translation-title">
            {props.videoTranslation.title}
            </p>
        </div>
        :""
        
    }
     
    </div>
  );
}

export default VideoTranslation;
