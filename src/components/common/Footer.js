import React, { useEffect, useState } from "react";
import "./css/footer.scss";
import { NavLink } from "react-router-dom";

import SocialNetworks from "./SocialNetworks";
import categoriesData from "./categories.json";

function Footer() {
  const head = document.querySelector("head");

  useEffect(()=>{

    
     
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = "https://cdn.admixer.net/scripts3/loader2.js";
      script1.setAttribute("async", "")
      script1.setAttribute("data-inv","//inv-nets.admixer.net/");
      script1.setAttribute("data-r","single");
      script1.setAttribute("data-sender","admixer");
      script1.setAttribute("data-bundle","desktop");
      head.appendChild(script1);
           
      // add another script to head element
     
      const script2 = document.createElement("script");
      
      script2.type = "text/javascript";
      script2.innerHTML = `(window.globalAmlAds = window.globalAmlAds || []).push(function() {
        globalAml.defineSlot({z: '57a6d7b3-706f-46d9-bac3-c895f600dd59', ph: 'admixer_57a6d7b3706f46d9bac3c895f600dd59_zone_8436_sect_2199_site_2053', i: 'inv-nets', s:'5ddce36f-65eb-4a6c-8099-05579d369625', sender: 'admixer'});
        globalAml.singleRequest("admixer");});`;
      head.appendChild(script2);
      
  },[])
  const categoriesComponents = categoriesData
    .slice(0, categoriesData.length)
    .map(category => (
      <NavLink
        to={"/" + category.category_id}
        className="footer-category"
        key={category.categoty_id}
      >
        {category.category_name_short}
      </NavLink>
    ));
    const thisYear = new Date();
  return (
    <footer id="sticky-footer">
      <div className="container ">
        <div className="row">
          <div className="d-none d-lg-block col-lg-12">
            <div className=" categories">{categoriesComponents}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="row">
              <div className="col-12 logo-and-socnets-wrap">
                <img
                  className="footer-logo"
                  src={require("../../images/logo/logo-tyzhden_without_bg.svg")}
                  alt="Логотип: Український тиждень"
                />

                <div className="social-networks-footer">
                  <SocialNetworks />
                </div>
              </div>
            </div>
            <div className="row d-none d-lg-block">
              <div className="col-12 col-md-12 partners">
                <p className="copyright">&copy;2007–{thisYear.getFullYear()} Тиждень.ua</p>
                <a href="https://old.tyzhden.ua/Virtual/56509" className="advertisers">Рекламодавцям</a>
                <p className="separator">|</p>
                <a  className="rss" href="https://old.tyzhden.ua/RSS/">
                  <img
                  src={require("../../images/icons/logo_rss.svg")}
                  alt="rss"
                /></a>
                 <a className="iua" href="https://www.i.ua/">
                <img
                  src={require("../../images/icons/logo_iua.svg")}
                  alt="iua"
                />
                </a>
                {/* <img
                  className="partner-text-logo"
                  src={require("../../images/icons/logo_rambler.svg")}
                  alt="Рамблер"
                /> */}
                 <a className="partner-text-logo" href="https://www.bigmir.net/">
                <img
                  src={require("../../images/icons/logo_bigmir.svg")}
                  alt="Bigmir)net"
                />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 flex justify-content-center">
            <div className="contacts-wrap" align="center">
              <div className="contact">
                <img
                  src={require("../../images/icons/location-24px.svg")}
                  alt="Місцезнаходження"
                />
                <p>01030, м.Київ, а/с 212</p>
              </div>
              <div className="contact">
                <img
                  src={require("../../images/icons/mail-24px.svg")}
                  alt="@email"
                />
                <p>info@tyzhden.ua</p>
              </div>
              <div className="contact">
                <img
                  src={require("../../images/icons/phone-24px.svg")}
                  alt="Телефон"
                />
                <p className="phone">+38(044) 351-13-00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="partners-footer">
          <div className="row">
            <div className="col-2 offset-3 col-md-2 offset-md-4 d-md-none flex justify-content-center">
              <a href="https://old.tyzhden.ua/RSS/"><img
                className="rss partner-image-logo"
                src={require("../../images/icons/logo_rss.svg")}
                alt="rss"
              /></a>
            </div>
            <div className="col-2 col-md-2 d-md-none flex justify-content-center">
            <a href="https://www.i.ua/"><img
                className="partner-image-logo"
                src={require("../../images/icons/logo_iua.svg")}
                alt="iua"
              /></a>
            </div>
            <div className="col-2 col-md-2 offset-md-5 d-md-none flex justify-content-center">
            <a href="https://www.bigmir.net/"> <img
                className="partner-text-logo bigmir-phone"
                src={require("../../images/icons/logo_bigmir.svg")}
                alt="Bigmir)net"
              /></a>
            </div>
           
          </div>
          <div className="partners text-center">
            <a className="advertisers" href="https://old.tyzhden.ua/Virtual/56509">Рекламодавцям</a>
            <p className="copyright">&copy;2007–{thisYear.getFullYear()} Тиждень.ua</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
