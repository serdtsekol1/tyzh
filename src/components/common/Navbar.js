import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SocialNetworks from "./SocialNetworks";

import categoriesData from "./categories.json";
import "./css/navbar.scss";

import $ from "jquery";

const Header = props => {
  
  useEffect(()=>{
    
    $('.navbar-nav>li>a, .dropdown-menu .dropdown-item').not(".dropdown-toggle").on('click', function(){
      $('.navbar-collapse').removeClass('show'); }
    );

    $('.navbar-toggler, .navbar-nav>li>a, .dropdown-menu .dropdown-item').not(".dropdown-toggle").on('click', function(){
      
      $('#red-background').toggleClass('back-show'); }
    );
    
   

  
    
  },[])
  const activeStyle = {
    color: "#ED1B2F"
  };
  const categoriesComponents = categoriesData
    .slice(1, categoriesData.length)
    .map(category => (
       
      <NavLink
        key={category.category_id}
        activeStyle={activeStyle}
        to={`/articles/${category.category_name}/page=1`}
        className="dropdown-item"
      >
       <div style={{'backgroundColor': category.category_color}} className="rubric-color"></div> <p>{category.category_name_short}</p>
      </NavLink>
    ));
  return (
    <div>
    <nav className="navbar navbar-expand-xl fixed-top">
      <div className="container-fluid">
        <div className="container">
          <div className="navbar-custom-wrap">
          <a href="https://tyzhden.ua/search?q="><img
            className="d-block d-xl-none"
            src={require("../../images/icons/search-24px-white.svg")}
          /></a>
          <NavLink to="/" className="navbar-brand">
            <img
              className="logo"
              src={require("../../images/logo/logo-tyzhden_red_bg.svg")}
              alt="Український тиждень"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <div className="inline-flex">
                  <li class="nav-item second-nav-link">
                      <a className="" href="https://tyzhden.ua/Login">
                      <img className="account-icon" src={require("../../images/icons/account-24px.svg")}/>
                        <p className="my-profile">Мій кабінет</p>
                      </a>

                  </li>
                  <li class="nav-item second-nav-link ">
                      <a className="" href="https://tyzhden.ua/InfoCenter/Subscription/"><p className="subscribe">Передплата</p></a>
                  </li>
                  
              </div>
            <ul className="navbar-nav">
            <li className="nav-item first-nav dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <p className="articles-nav">Статті</p>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                 
                  <NavLink
                    activeStyle={activeStyle}
                    exact
                    to={"/articles/all-categories/page=1"}
                    className="dropdown-item"
                  >
                     <div className="rubric-color"></div>
                    <p>Усі рубрики</p>
                  </NavLink>
                  {categoriesComponents}
                  <div class="dropdown-decoration"></div>
                </div>
              </li>
              <li className="nav-item active">
                <NavLink
                  activeStyle={activeStyle}
                  exact
                  to="/news/page=1"
                  className="nav-link"
                >
                  Новини
                </NavLink>
              </li>

              
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  to="/columns"
                  className="nav-link"
                >
                  Колонки
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  to="/photoreports"
                  className="nav-link"
                >
                  Фоторепортаж
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  to="/journals/2020"
                  className="nav-link"
                >
                  Журнал
                </NavLink>
              </li>
              <li className="last-nav nav-item">
                <a href="https://tyzhden.ua/PressReleases/"
                  activeStyle={activeStyle}
                  className="nav-link"
                >
                  Прес-релізи
                </a>
              </li>
              
              
            </ul>
            <a href="https://tyzhden.ua/search?q="><img
                className="search-small"
                alt=""
                src={require("../../images/icons/search-24px.svg")}
              /></a>
            
            <div className="navbar-text">
              {/* 
              
              */}
              <div className="d-block d-xl-none">
                <a href="https://ukrainianweek.com/"><p className="uk-week">The Ukrainian Week</p></a>
                <SocialNetworks color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="sticky-top second-nav-nar">
      <nav class="navbar navbar-expand-sm second-nav">
         <div className="container">
          <div class="navbar-collapse collapse" id="navbar2">
              <ul class="navbar-nav navbar-nav-second">
                  <li class="nav-item active">
                       <a href="https://ukrainianweek.com/"><p className="uk-week">The Ukrainian Week</p></a>
                  </li>
                  <div className="inline-flex">
                  <li class="nav-item second-nav-link ">
                      <a className="" href="https://tyzhden.ua/InfoCenter/Subscription/"><p className="subscribe">Передплата</p></a>
                  </li>
                  <li class="nav-item second-nav-link">
                      <a className="" href="https://tyzhden.ua/Login"><p className="my-profile">Мій кабінет</p>
                      <img className="account-icon" src={require("../../images/icons/account-24px.png")}/>
                      </a>

                  </li>
                  </div>
              </ul>
          </div>
          </div>
      </nav>
  </div>
  <div id="red-background" className="red-background"></div>

  </div>
  );
};
export default Header;
