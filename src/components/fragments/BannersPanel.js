import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from 'react-helmet';
import "./css/banners_panel.scss";


function BannersPanel(props) {
  
  useEffect(() => {
    
    //new adriver("adriver_banner_2", {sid: 168072, bn: 2, bt: 52});
  },[]);
 
  
  return (
    
    <div className="banners-panel fragment-big">
      {props.my?
      <div className="image-banner">
        <Link to="/Publications/Pandemic">
        <img
          src={require("../../images/banners/side_pandemic_1.gif")}
          alt="Баннер"
        /></Link>
      </div>
      :""}
      {props.ria?
       <div>
        <div className="image-banner" id="riainfo_612a42a8d345f0bd8b57a05e98f987f5"></div>
          <ScriptTag type="text/javascript" src="https://cobrand.ria.com/js/ria_informer.js?riacode=612a42a8d345f0bd8b57a05e98f987f5" />
      </div>
      :""}
     
      {props.adriver?
      <div>
      <div id="adriver_banner_3"> </div>
          <ScriptTag type="text/javascript" src="scripts/adriver.core.2.js"/>
      </div>
      :""}
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
       

    

      {/* <ScriptTag type="text/javascript" src={require("../../images/banners/declare.js")} /> */}

     

     
    </div>
  );
}
export default BannersPanel;
