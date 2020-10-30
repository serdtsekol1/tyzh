import React, {useEffect,useState} from "react";
import {Link, useLocation} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from 'react-helmet';
import "./css/banners_panel.scss";
import MoxTV from "./MoxTV";



function BannersPanel(props) {
  const location = useLocation();
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [riaRandomNumber, setRiaRandomNumber] = useState(getRandomInt(2));
  const [myRandomNumber, setMyRandomNumber] = useState(getRandomInt(5));
  const [randomNum,setRandonNum] = useState(getRandomInt(1000000000));
  
  useEffect(() => {

    const admixer = document.getElementById(`${props.admixer_id}_wrap`);
    const adriverItem = document.getElementById(`${props.adriver_id}_wrap`);
    
    
    
    if (admixer && (admixer.firstElementChild.childNodes.length === 0)) {
        const head = document.querySelector("head");

        const script2 = document.createElement("script");

        script2.type = "text/javascript";
        script2.innerHTML = `(window.globalAmlAds = window.globalAmlAds || []).push(function() {
        globalAml.defineSlot({z: '57a6d7b3-706f-46d9-bac3-c895f600dd59', ph: 'admixer_57a6d7b3706f46d9bac3c895f600dd59_zone_8436_sect_2199_site_2053', i: 'inv-nets', s:'5ddce36f-65eb-4a6c-8099-05579d369625', sender: 'admixer'});
        globalAml.singleRequest("admixer");});`;
        head.appendChild(script2);
   
      
      if(!admixer.querySelector(props.admixer_id)) {
       
        const script = document.createElement("script");
        // script.id = props.admixer_id;
        script.type = "text/javascript";
        script.innerHTML = `(window.globalAmlAds = window.globalAmlAds || []).push(function() {
          globalAml.display('admixer_57a6d7b3706f46d9bac3c895f600dd59_zone_8436_sect_2199_site_2053');
          });`;
        
        admixer.appendChild(script);
       
      }
    }
    if (adriverItem){
       
        const script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.innerHTML = `new adriver("adriver_banner_${randomNum}", {sid:168072, bt:52, bn:3});`;
        
        adriverItem.appendChild(script1);
      
    }

    
  },[]);
 
  
  return (
    
    <div className="banners-panel fragment-big">
      {props.my?
      <div>
      {myRandomNumber==0?
      <div className="image-banner">
        <Link to="/Pandemic">
        <img
          src="https://i.tyzhden.ua/content/main_side_pandemic_1.gif"
          alt="Баннер"
        /></Link>
      </div>
      :""}
      {myRandomNumber==1?
      <div className="image-banner">
        <Link to="/Pandemic">
        <img
          src="https://i.tyzhden.ua/content/main_side_pandemic_2.gif"
          alt="Баннер"
        /></Link>
      </div>
      :""}
      {myRandomNumber==2?
      <div className="image-banner">
        <Link to="/Pandemic">
        <img
          src="https://i.tyzhden.ua/content/main_side_pandemic_3.gif"
          alt="Баннер"
        /></Link>
      </div>
      :""}
      {myRandomNumber==3?
      <div className="image-banner">
        <Link to="/Pandemic">
        <img
          src="https://i.tyzhden.ua/content/main_side_pandemic_4.gif"
          alt="Баннер"
        /></Link>
      </div>
      :""}
      {myRandomNumber==4?
      <div className="image-banner">
        <Link to="/Pandemic">
        <img
          src="https://i.tyzhden.ua/content/main_side_pandemic_5.gif"
          alt="Баннер"
        /></Link>
      </div>
      :""}
      </div>
      :""}
      {props.ria?
       <div>
         {riaRandomNumber==0?
       <div>
        <div className="image-banner" id="riainfo_612a42a8d345f0bd8b57a05e98f987f5"></div>
          <ScriptTag type="text/javascript" src="https://cobrand.ria.com/js/ria_informer.js?riacode=612a42a8d345f0bd8b57a05e98f987f5" />
        </div>
        :""}
         {riaRandomNumber==1?
       <div>
         <div className="image-banner" id="riainfo_df6a0fef366e4ceafcb5a3af5528a951"></div>
          <ScriptTag type="text/javascript" src="https://cobrand.ria.com/js/ria_informer.js?riacode=df6a0fef366e4ceafcb5a3af5528a951"/>
        </div>
        :""}
        </div>
      :""}
     
    
      {props.adriver?
      <div id={`${props.adriver_id}_wrap`} className="image-banner">
       
       <div id={`adriver_banner_${randomNum}`}> </div>
      </div>
      :""}
      
      {props.news?
        <a href="http://meetdocsfestival.com/">
          <img className="image-banner"
           src={require("../../images/banners/meet_docs.png")}/>
        </a>
      :""}
      {props.news?
        <a href="https://youtu.be/opjM1COBTGE">
          <img className="image-banner"
               src={require("../../images/banners/Atlantis-300x250-tygden.png")}/>
        </a>
        :""}
      

      {props.moxTV?
        <MoxTV moxTV_id={props.moxTV_id}/>
        :""}
      {props.admixer?
      <div  className="d-none d-lg-block image-banner" id={`${props.admixer_id}_wrap`}>
        <div id='admixer_57a6d7b3706f46d9bac3c895f600dd59_zone_8436_sect_2199_site_2053' data-sender='admixer'></div>
      </div>
  
      :""}
     

    </div>
  );
}
export default BannersPanel;
