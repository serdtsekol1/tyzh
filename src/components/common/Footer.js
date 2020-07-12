import React from "react";
import "./css/footer.scss";
import { NavLink } from "react-router-dom";

import SocialNetworks from "./SocialNetworks";
import categoriesData from "./categories.json";

function Footer() {
  const categoriesComponents = categoriesData
    .slice(1, categoriesData.length)
    .map(category => (
      <NavLink
        to={"/articles/" + category.category_name}
        className="footer-category"
        key={category.categoty_id}
      >
        {category.category_name}
      </NavLink>
    ));
  return (
    <footer id="sticky-footer">
      <div className="container ">
        <div className="row">
          <div className="d-none d-lg-block col-lg-12">
            <div className=" categories">{categoriesComponents}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
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
                <p className="copyright">&copy;2007–2019 Тиждень.ua</p>
                <p className="advertisers">Рекламодавцям</p>
                <p className="separator">|</p>
                <img
                  className="rss"
                  src={require("../../images/icons/logo_rss.svg")}
                  alt="rss"
                />
                <img
                  src={require("../../images/icons/logo_iua.svg")}
                  alt="iua"
                />
                {/* <img
                  className="partner-text-logo"
                  src={require("../../images/icons/logo_rambler.svg")}
                  alt="Рамблер"
                /> */}
                <img
                  className="partner-text-logo"
                  src={require("../../images/icons/logo_bigmir.svg")}
                  alt="Bigmir)net"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 flex justify-content-center">
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
            <div className="col-3 offset-3 col-md-2 offset-md-4 flex justify-content-center">
              <img
                className="rss partner-image-logo"
                src={require("../../images/icons/logo_rss.svg")}
                alt="rss"
              />
            </div>
            <div className="col-3 col-md-3 flex justify-content-center">
              <img
                className="partner-image-logo"
                src={require("../../images/icons/logo_iua.svg")}
                alt="iua"
              />
            </div>
          
          </div>
          <div className="row">
            <div className="col-4 offset-4 col-md-2 offset-md-4 flex justify-content-center">
               <img
                className="partner-text-logo"
                src={require("../../images/icons/logo_bigmir.svg")}
                alt="Bigmir)net"
              />
            </div>
            <div className="col-3 col-md-3 flex justify-content-center">
             
            </div>
          </div>
          <div className="partners text-center">
            <p className="advertisers">Рекламодавцям</p>
            <p className="copyright">&copy;2007–2019 Тиждень.ua</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
