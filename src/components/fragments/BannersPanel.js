import React, {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from 'react-helmet';
import "./css/banners_panel.scss";


function BannersPanel(props) {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [riaRandomNumber, setRiaRandomNumber] = useState(getRandomInt(2));
  const [myRandomNumber, setMyRandomNumber] = useState(getRandomInt(5));
  const [randomNum,setRandonNum] = useState(Math.random() * 1000000000);

    
  
  useEffect(() => {
    const admixer = document.getElementById(`${props.admixer_id}_wrap`);
    const adriverItem = document.getElementById(`${props.adriver_id}_wrap`);
    const head = document.querySelector("head");
    
   
    
    if (admixer){
        // import ads script if not yet imported
    // if (!head.querySelector("#admixer-head")) {
     
    //   const script = document.createElement("script");
    //   script.id = "admixer-head";
    //   script.async = true;
    //   script.src = "https://cdn.admixer.net/scripts3/loader2.js";
    //   script.setAttribute("data-inv","//inv-nets.admixer.net/");
    //   script.setAttribute("data-r","single");
    //   script.setAttribute("data-sender","admixer");
    //   script.setAttribute("data-bundle","desktop");
    //   head.appendChild(script);
    // }
    
    // // add another script to head element
    // if (!head.querySelector("#admixer-head-2")) {
     
    //   const script = document.createElement("script");
    //   script.id = "#admixer-head-2";
    //   script.type = "text/javascript";
    //   script.charset = "utf-8";
    //   script.innerHTML = `
    //   (window.globalAmlAds = window.globalAmlAds || []).push(function() {
    //     globalAml.defineSlot({z: '57a6d7b3-706f-46d9-bac3-c895f600dd59', ph: 'admixer_57a6d7b3706f46d9bac3c895f600dd59_zone_8436_sect_2199_site_2053', i: 'inv-nets', s:'5ddce36f-65eb-4a6c-8099-05579d369625', sender: 'admixer'});
    //     globalAml.singleRequest("admixer");});
    //   `;
    //   head.appendChild(script);
    // }
   
      
      if(!admixer.querySelector(props.admixer_id)) {
       
        const script = document.createElement("script");
        script.id = props.admixer_id;
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.innerHTML = `
        (window.globalAmlAds = window.globalAmlAds || []).push(function() {
          globalAml.display('admixer_57a6d7b3706f46d9bac3c895f600dd59_zone_8436_sect_2199_site_2053');
          });
        `;
        
        admixer.appendChild(script);
       
      }
    }
    if (adriverItem){
 

        
        // adriverItem2.appendChild(script2);
        const script1 = document.createElement("script");
        script1.id = props.adriver_id;
        script1.type = "text/javascript";
        script1.charset = "utf-8";
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
      {props.admixer?
      <div>
      <div  className="d-none d-lg-block image-banner" id={`${props.admixer_id}_wrap`}>
        <div id='admixer_57a6d7b3706f46d9bac3c895f600dd59_zone_8436_sect_2199_site_2053' data-sender='admixer'></div>
       
      </div>
      <div className="d-block d-md-none image-banner">
      <div id="riainfo_df6a0fef366e4ceafcb5a3af5528a951"></div>
       <ScriptTag type="text/javascript" src="https://cobrand.ria.com/js/ria_informer.js?riacode=df6a0fef366e4ceafcb5a3af5528a951"/>
      </div>
     </div>
      :""}
    
      {props.adriver?
      <div id={`${props.adriver_id}_wrap`} className="image-banner">
       
       <div id={`adriver_banner_${randomNum}`}> </div>
      </div>
        :""}
      
  
       

    

      {/* <ScriptTag type="text/javascript" src={require("../../images/banners/declare.js")} /> */}

     

     
    </div>
  );
}
export default BannersPanel;
