import React from "react";
import ScriptTag from 'react-script-tag';
import "./css/banners.scss";

function GorizontalAdBanner(props) {
  return (
    <div className="d-none d-md-block">
      {props.urknet?
      <div>
        <ScriptTag async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
          <ins class="adsbygoogle"
              style={ {display:"block", textAlign:"center", paddingBottom: "20px"}}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-7302036088769417"
              data-ad-slot="3102276765"></ins>
        <ScriptTag type="text/javascript" src="scripts/adsbygoogle.js"/>
       </div> : 
       "" }
       {props.yottos?
       <div>
        <ins class="image-banner adsbyyottos" style={{display:"block"}}
                  data-ad-client="d6512604-0c08-11e8-ae50-002590d97638"></ins> 
          <ScriptTag async defer src="https://cdn.yottos.com/adsbyyottos.js"/>
        </div>
        :""}
        {props.mixadvert?
        <div>
          <ScriptTag type="text/javascript" src="https://m.mixadvert.com/show/?id=3005" async/>
          <div id="image-banner MIXADV_3005" class="MIXADVERT_NET"></div>
        </div>
        :""}
    </div>
  );
}

export default GorizontalAdBanner;