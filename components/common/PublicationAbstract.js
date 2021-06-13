import React from "react";
import { useEffect } from 'react';
import ScriptTag from 'react-script-tag';

function PublicationAbstract(props) {
    let twttr;
    useEffect(() => {
        if (twttr) {
        twttr.widgets.load(document.getElementById('twitter-timeline'));
        }
    });
    let image= props.publication.image?props.publication.image:props.publication.image1
  return (
    <div>
       
      <ScriptTag type="text/javascript" src="https://platform.twitter.com/widgets.js" />

      {props.children}
   
    </div>
  );
}

export default PublicationAbstract;
