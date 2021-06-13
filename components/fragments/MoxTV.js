import React, {useEffect,useState} from "react";
import ScriptTag from 'react-script-tag';
import {Helmet} from 'react-helmet';



function MoxTV(props) {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
    
  
  useEffect(() => {
    let moxTV;
    console.log(moxTV);
    moxTV = document.getElementById(`${props.moxTV_id}_wrap`);
    console.log(moxTV);

    console.log(props.moxTV_id);
    if (moxTV) {
      console.log(moxTV);

      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.id="moxTV";
      script2.innerHTML = ` (function(window, document, undefined) {
        var script_tag = document.createElement('script');
        script_tag.src = 'https://ad.mox.tv/mox/mwayss_invocation.min.js?pzoneid=19&height=250&width=300&tld=tyzhden.ua&ctype=div';
        var container = document.querySelectorAll('[data-id=_mwayss-6868686868]')[0];    
        container.setAttribute('id', (container.getAttribute('data-id')+(new Date()).getTime()));
        container.removeAttribute('data-id');
        container.parentNode.insertBefore(script_tag, container);
    })(window, document);`;
          moxTV.appendChild(script2);
    }
    
  },[]);
 
  
  return (
 


    <div id={`${props.moxTV_id}_wrap`} className="image-banner">
      <div data-id={`_mwayss-6868686868`}></div>
    </div>)

}
export default MoxTV;
