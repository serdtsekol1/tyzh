import React, {useEffect,useState} from "react";
import ScriptTag from 'react-script-tag';
import {Helmet} from 'react-helmet';



function MoxTV(props) {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [randomNum,setRandonNum] = useState(getRandomInt(1000000000));
  const [moxTV,setMoxTV] = useState(document.getElementById(`${props.moxTV_id}_wrap`));

    
  
  useEffect(() => {
    setMoxTV(document.getElementById(`${props.moxTV_id}_wrap`));
    


    if (moxTV) {
      console.log(moxTV);
    //   if(!moxTV.querySelector("#moxTV")) {

    //   }
      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.id="moxTV";
      script2.innerHTML = ` (function(window, document, undefined) {
        var script_tag = document.createElement('script');
        script_tag.src = 'https://ad.mox.tv/mox/mwayss_invocation.min.js?pzoneid=19&height=250&width=300&tld=tyzhden.ua&ctype=div';
        var container = document.querySelectorAll('[data-id=_mwayss-${randomNum}]')[0];    
        container.setAttribute('id', (container.getAttribute('data-id')+(new Date()).getTime()));
        container.removeAttribute('data-id');
        container.parentNode.insertBefore(script_tag, container);
    })(window, document);`;
          moxTV.appendChild(script2); 
    // }
  }
    
  },[moxTV]);
 
  
  return (
 


    <div id={`${props.moxTV_id}_wrap`} className="image-banner">
      <div data-id={`_mwayss-${randomNum}`}></div>
    </div>)

}
export default MoxTV;
