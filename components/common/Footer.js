import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

import SocialNetworks from "./SocialNetworks";
import categoriesData from "./categories.json";

function Footer() {

  useEffect(()=>{
      
  },[])
  const categoriesComponents = categoriesData
    .slice(0, categoriesData.length)
    .map(category => (
      <NavLink
        to={"/" + category.category_id}
        className="footer-category"
        key={category.category_id}
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
                  src={"/images/logo/logo-tyzhden_without_bg.svg"}
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
                <a  className="rss" href="https://tyzhden.ua/RSS/All/">
                  <img
                  src={"../../images/icons/logo_rss.svg"}
                  alt="rss"
                /></a>
                 <a className="iua" href="https://www.i.ua/">
                <img
                  src={"../../images/icons/logo_iua.svg"}
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
                  src={"../../images/icons/logo_bigmir.svg"}
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
                  src={"../../images/icons/location-24px.svg"}
                  alt="Місцезнаходження"
                />
                <p>01054, м.Київ, а/с 268</p>
              </div>
              <div className="contact">
                <img
                  src={"../../images/icons/mail-24px.svg"}
                  alt="@email"
                />
                <p>info@tyzhden.ua</p>
              </div>
              <div className="contact">
                <img
                  src={"../../images/icons/mail-24px.svg"}
                  alt="@email"
                />
                <p>reklama@tyzhden.ua</p>
              </div>
              <div className="contact">
                <img
                  src={"../../images/icons/phone-24px.svg"}
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
                src={"../../images/icons/logo_rss.svg"}
                alt="rss"
              /></a>
            </div>
            <div className="col-2 col-md-2 d-md-none flex justify-content-center">
            <a href="https://www.i.ua/"><img
                className="partner-image-logo"
                src={"../../images/icons/logo_iua.svg"}
                alt="iua"
              /></a>
            </div>
            <div className="col-2 col-md-2 offset-md-5 d-md-none flex justify-content-center">
            <a href="https://www.bigmir.net/"> <img
                className="partner-text-logo bigmir-phone"
                src={"../../images/icons/logo_bigmir.svg"}
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
