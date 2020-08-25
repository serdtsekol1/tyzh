import React, {useEffect, useState} from "react";
import ScriptTag from 'react-script-tag';
import "./css/banners.scss";


function GorizontalAdBanner(props) {
 
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [randomNumber, setRandomNumber] = useState(getRandomInt(3));

  useEffect(() => {
    const ukrnet = document.getElementById("ukrnet_wrap");
   
    if (ukrnet){

        const script = document.createElement("script");
        script.id = "#ukrnet-body";
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.innerHTML = `
        (adsbygoogle = window.adsbygoogle || []).push({});
        `;
        ukrnet.appendChild(script);
      
    }
  },[]);
 

  return (
    <div className="d-none d-md-block">
      {props.ukrnet?
      <div id="ukrnet_wrap" className="banner subscription-banner">
        <ScriptTag async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
        <ins className="adsbygoogle"
            style={{display:"block", textAlign:"center", paddingBottom: "20px"}}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-7302036088769417"
            data-ad-slot="3102276765"></ins>
        

       </div> : 
       "" }
       {props.yottos?
       
       <div className="banner subscription-banner">
          {randomNumber==0?
          <div>
            <ins class="image-banner adsbyyottos" style={{display:"block"}}
                      data-ad-client="d6512604-0c08-11e8-ae50-002590d97638"></ins> 
              <ScriptTag async defer src="https://cdn.yottos.com/adsbyyottos.js"/>
          </div>
        :""}
        {randomNumber==1?
          <div>
           <div id="riainfo_3237491e3525b678833f071e7085c914"></div>
            <ScriptTag type="text/javascript" src="https://cobrand.ria.com/js/ria_informer.js?riacode=3237491e3525b678833f071e7085c914"/>

          </div>
        :""}
         {randomNumber==2?
          <div>
            <div id="riainfo_6489cdc5bd56e72056e105adc334e2bd"></div>
            <ScriptTag type="text/javascript" src="https://cobrand.ria.com/js/ria_informer.js?riacode=6489cdc5bd56e72056e105adc334e2bd"/>

          </div>
        :""}
        </div>
        :""}
         {props.mixadvert?
        <div className="banner subscription-banner">
          <div id="MIXADV_7708" className="MIXADVERT_NET"></div>
          <ScriptTag type="text/javascript" src="https://m.mixadvert.com/show/?id=7708" async/>
         
        </div>
        :""}
    </div>
  );
}

export default GorizontalAdBanner;
