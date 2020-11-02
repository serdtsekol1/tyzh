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
        script.innerHTML = `
        (adsbygoogle = window.adsbygoogle || []).push({});
        `;
        ukrnet.appendChild(script);
      
    }
    const adpartner = document.getElementById("adpartner-jsunit-5987");
    if (adpartner){

      const script = document.createElement("script");
      script.id = "#adpartner-body";
      script.type = "text/javascript";
      script.innerHTML = `
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = "//a4p.adpartner.pro/jsunit?id=5987&ref=" + encodeURIComponent(document.referrer) + "&" + Math.random();
        head.appendChild(script);
      `;
      adpartner.appendChild(script);
    }
    const mox = document.getElementById("mox-big");
    if (mox){

      const script4 = document.createElement("script");
    
      script4.type = "text/javascript";
      script4.innerHTML = `
      (function(window, document, undefined) {
        var script_tag = document.createElement('script');
        script_tag.src = 'https://ad.mox.tv/mox/mwayss_invocation.min.js?pzoneid=4914&height=480&width=640&tld=tyzhden.ua&ctype=div';
        var container = document.querySelectorAll('[data-id=_mwayss-1e3b9c08c427b60fbeb6b15d36b5b81e]')[0];    
        container.setAttribute('id', (container.getAttribute('data-id')+(new Date()).getTime()));
        container.removeAttribute('data-id');
        container.parentNode.insertBefore(script_tag, container);
    })(window, document);
      `;
      mox.appendChild(script4);
    }
    const redTram = document.getElementById("r22149");
    if (redTram){

      const script5 = document.createElement("script");
      script5.id = "#adpartner-body";
      script5.type = "text/javascript";
      script5.innerHTML = `
        (function() {
        var tag = (function() {
                var informers = document.getElementsByClassName('r22149'),
                    len = informers.length;
                return len ? informers[len - 1] : null;
            })(),
            idn = (function() {
                var i, num, idn = '', chars = "abcdefghiklmnopqrstuvwxyz",
                    len = Math.floor((Math.random() * 2) + 4);
                for (i = 0; i < len; i++) {
                    num = Math.floor(Math.random() * chars.length);
                    idn += chars.substring(num, num + 1);
                }
                return idn;
            })();
          var container = document.createElement('div');
              container.id = idn;
              container.innerHTML = 'загрузка...';
          tag.appendChild(container);
          var script = document.createElement('script');
              script.className = 's22149';
              script.src = 'https://goods.redtram.com/j/22149.js';
              script.charset = 'utf-8';
              script.dataset.idn = idn;
          tag.parentNode.insertBefore(script, tag);
        })();
      `;
      redTram.appendChild(script5);
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
            {/* <ins className="image-banner adsbyyottos" style={{display:"block"}}
                      data-ad-client="d6512604-0c08-11e8-ae50-002590d97638"></ins> 
              <ScriptTag async defer src="https://cdn.yottos.com/adsbyyottos.js"/> */}
            {props.adpartner?
              <div className="banner subscription-banner">
                <div id="adpartner-jsunit-5987">
                </div>
            </div>
            :""}
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

        {props.redTram?
          <div className="banner subscription-banner">
            <div id="r22149" className="r22149"></div>
          </div>
        :""}

        {props.mox?
          <div className="mox-big" className="banner subscription-banner">
          <div data-id='_mwayss-1e3b9c08c427b60fbeb6b15d36b5b81e'></div></div>
        :""}
    </div>
  );
}

export default GorizontalAdBanner;
