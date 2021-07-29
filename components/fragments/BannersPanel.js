import React, {useEffect,useState} from "react";
import Link from "next/link";
import ScriptTag from 'react-script-tag';
import MoxTV from "./MoxTV";



function BannersPanel(props) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const [riaRandomNumber, setRiaRandomNumber] = useState(getRandomInt(2));
  const [myRandomNumber, setMyRandomNumber] = useState(getRandomInt(5));
  const [randomNum, setRandonNum] = useState(getRandomInt(1000000000));
  let custom_banner = props.custom_banner;
  let customBannerImage = "";
  let customBannerLink = "";

  function displayRandomBanners (banners) {
    // Function takes array of banners and return random banner
    const random = getRandomInt(banners.length);
    return banners[random]
  }

  const special = {
      image: "/images/banners/special.gif",
      link: "https://book-ye.com.ua/projects/knyhy-spetsialnoho-pryznachennya/?fbclid=IwAR22Wp1V5dCibuRESSfU9AwYykJjCRDfWTDy_7qRd2MVyZv1C7lg_TPiBvM"
    }
  const forum = {
      image: "/images/banners/forum.jpeg",
      link: "https://mspu.gov.ua/events/mizhnarodnij-oboronnij-investicijnij-forum"
  }
  if (custom_banner) {
    let banner = displayRandomBanners([special])
    customBannerImage = banner["image"];
    customBannerLink = banner["link"];
    if (["Економіка"].includes(props.rubric)) {
      banner = displayRandomBanners([forum])
      customBannerImage = banner["image"];
      customBannerLink = banner["link"];
     }
  }

  useEffect(() => {

    const admixer = document.getElementById(`${props.admixer_id}_wrap`);

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
  }, []);
  return (
    <div className="banners-panel fragment-big">
      {props.my?
      <div>
      {myRandomNumber==0?
      <div className="image-banner">
        <Link href="/Pandemic">
          <a>
            <img
              src="https://i.tyzhden.ua/content/main_side_pandemic_1.gif"
              alt="Баннер"
            />
          </a>
        </Link>
      </div>
      :""}
      {myRandomNumber==1?
      <div className="image-banner">
        <Link href="/Pandemic">
          <a>
            <img
              src="https://i.tyzhden.ua/content/main_side_pandemic_2.gif"
              alt="Баннер"
            />
          </a>
        </Link>
      </div>
      :""}
      {myRandomNumber==2?
      <div className="image-banner">
        <Link href="/Pandemic">
          <a>
            <img
              src="https://i.tyzhden.ua/content/main_side_pandemic_3.gif"
              alt="Баннер"
            />
          </a>
        </Link>
      </div>
      :""}
      {myRandomNumber==3?
      <div className="image-banner">
        <Link href="/Pandemic">
          <a>
            <img
              src="https://i.tyzhden.ua/content/main_side_pandemic_4.gif"
              alt="Баннер"
            />
          </a>
        </Link>
      </div>
      :""}
      {myRandomNumber==4?
      <div className="image-banner">
        <Link href="/Pandemic">
          <a>
          <img
              src="https://i.tyzhden.ua/content/main_side_pandemic_5.gif"
              alt="Баннер"
            />
          </a>
        </Link>
      </div>
      :""}
      </div>
      :""}   
      {props.ria?
        <div>
          <div>
             <iframe id="612a42a8d345f0bd8b57a05e98f987f5" src="//affiliate.ria.com/service/state-informer?key=612a42a8d345f0bd8b57a05e98f987f5" width="100%" height="470px" frameBorder="0" scrolling="no"></iframe>
             <ScriptTag type="text/javascript" src="https://affiliate.ria.com/js/ria_informer_iframe.js" />
          </div>
        </div>
      :""}
      {custom_banner?
        <a href={customBannerLink}>
          <img className="image-banner" src={customBannerImage} alt=""/>
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
