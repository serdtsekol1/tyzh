import React from "react";
import { useEffect } from 'react';
import ScriptTag from 'react-script-tag';
import MetaTags from "./MetaTagsComponent";

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
      <MetaTags title={props.publication.title} ct100={true} image={image} abstract={props.publication.abstract} 
                keywords={props.publication.tags}/>
      <ScriptTag type="text/javascript" src="https://platform.twitter.com/widgets.js" />

      {props.children}
   
    </div>
  );
}

export default PublicationAbstract;
