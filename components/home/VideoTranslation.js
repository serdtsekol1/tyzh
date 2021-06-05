import React, { useState, useEffect} from "react";

import Parser from "html-react-parser";


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
