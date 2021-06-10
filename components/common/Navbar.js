import React, { useEffect } from "react";
import NavLink from "./NavLink";
import SocialNetworks from "./SocialNetworks";
import useMedia from 'use-media';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import categoriesData from "./categories.json";

import $ from "jquery";

const Header = props => {
  
  const isNarrow = useMedia({maxWidth: 1200});
  useEffect(()=>{
    $('.navbar-nav>li>a.dropdown-toggle').on('click', function(e){
      let ariaExpanded;
      if($(this).attr('aria-expanded') === 'false') {
        ariaExpanded = 'true';
      } else {
        ariaExpanded = 'false';
      }
      $(this).attr('aria-expanded', ariaExpanded);
      $(this).find('+ .dropdown-menu').toggleClass('show');
      // $('.navbar-collapse').toggleClass('show');
   
    });
    $('.navbar-nav>li>a, .dropdown-menu .dropdown-item').not(".dropdown-toggle").on('click', function(){
      $(this).parent('.dropdown-menu').removeClass('show');
      $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').attr('aria-expanded', 'false');
      $('.navbar-collapse').removeClass('show');
    }
    );
    // $('.navbar-toggler, .navbar-nav>li>a, .dropdown-menu .dropdown-item').not(".dropdown-toggle").on('click', function(){
    //   $('#red-background').toggleClass('back-show');
    //   if (isNarrow) {
    //     $('#red-background').toggleClass('back-show');
    //   }
    // }
    // );

  }, [])
  const activeStyle = {
    color: "#ED1B2F"
  };
  const year = new Date().getFullYear();
  const magazineYear = `/Magazines/${year}`;
  const categoriesComponents = categoriesData
    .slice(0, categoriesData.length)
    .map(category => (
      <NavLink
        key={category.category_id}
        activeStyle={activeStyle}
        to={`/${category.category_id}?page=1`}
        className="dropdown-item"
      >
       <div style={{'backgroundColor': category.category_color}} className="rubric-color"></div> <p>{category.category_name_short}</p>
      </NavLink>
    ));

  const onScroll = function() {
    if (document.getElementById("navbar-2")){
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar-2").style.padding = "0 0 0 0";
      } else {
        document.getElementById("navbar-2").style.padding = "60px 0 0 0";
      }
  };}

   //window.addEventListener('scroll', onScroll);
  return (
   
    <div>
      
      <Navbar fixed="top" expand="xl" id="myNavbar">
        
      <div className="container-fluid">
        <div className="container">
          <div className="navbar-custom-wrap">
          <a href="https://old.tyzhden.ua/search?q="><img
            className="d-block d-xl-none"
            src={"../../images/icons/search-24px-white.svg"}
            alt="Іконка пошуку"
          /></a>
          <NavLink to="/" className="navbar-brand">
            <img
              className="logo"
              src={"../../images/logo/logo-tyzhden_red_bg.svg"}
              alt="Український тиждень"
            />
          </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
             <div className="inline-flex d-xl-none">
                  <li className="nav-item second-nav-link">
                      <a className="" href="https://old.tyzhden.ua/Login">
                      <img className="account-icon" src={"../../images/icons/account-24px.svg"} alt="Іконка людини"/>
                        <p className="my-profile">Мій кабінет</p>
                      </a>

                  </li>
                  <li className="nav-item second-nav-link ">
                      <a className="" href="https://old.tyzhden.ua/InfoCenter/Subscription/"><p className="">Передплата</p></a>
                  </li>
                  <li className="nav-item second-nav-link ">
                      <a className="" href="https://www.patreon.com/ukrainianweek"><p className="">Підтримати</p></a>
                  </li>
                  <li className="nav-item second-nav-link ">
                      <a className="" href="https://old.tyzhden.ua/"><p className="">До старої версії</p></a>
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
                    to={"/Publications?page=1"}
                    className="dropdown-item"
                  >
                     <div className="rubric-color"></div>
                    <p>Усі статті</p>
                  </NavLink>
                  {categoriesComponents}
                  <div className="dropdown-decoration"></div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  to="/Subject"
                  className="nav-link"
                >
                  Спецтеми
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  to="/Columns"
                  className="nav-link"
                >
                  Колонки
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  to="/Gallery"
                  className="nav-link"
                >
                  Фоторепортаж
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  to={magazineYear}
                  className="nav-link"
                >
                  Журнал
                </NavLink>
              </li>
              <li className="last-nav nav-item">
                <NavLink to="/PressReleases?page=1"
                  activeStyle={activeStyle}
                  className="nav-link"
                >
                  Прес-релізи
                </NavLink>
              </li>
              
              
            </ul>
            <a href="https://old.tyzhden.ua/search?q="><img
                className="search-small"
                alt=""
                src={"../../images/icons/search-24px.svg"}
              /></a>
            
            <div className="navbar-text">
              {/* 
              
              */}
              <div className="d-block d-xl-none">
                <a href="https://ukrainianweek.com/"><p className="uk-week">The Ukrainian Week</p></a>
                <SocialNetworks color="white" />
              </div>
            </div>
            
            </Navbar.Collapse>
          
        </div>
      </div>
    </Navbar>
    <div className="sticky-top second-nav-nar" id="navbar-2">
      <nav className="navbar navbar-expand-sm second-nav">
         <div className="container">
          <div className="navbar-collapse collapse" id="navbar2">
              <ul className="navbar-nav navbar-nav-second">
                  <li className="nav-item active">
                       <a href="https://ukrainianweek.com/"><p className="uk-week">The Ukrainian Week</p></a>
                  </li>
                  <div className="inline-flex">
                  <li className="nav-item second-nav-link d-none d-xl-block">
                      <a className="" href="https://old.tyzhden.ua/"><p className="subscribe">До старої версії</p></a>
                  </li>
                  <li className="nav-item second-nav-link d-none d-xl-block">
                      <a className="" href="https://www.patreon.com/ukrainianweek"><p className="subscribe">Підтримати</p></a>
                  </li>
                  <li className="nav-item second-nav-link ">
                      <a className="" href="https://old.tyzhden.ua/InfoCenter/Subscription/"><p className="subscribe">Передплата</p></a>
                  </li>
                  <li className="nav-item second-nav-link">
                      <a className="" href="https://old.tyzhden.ua/Login"><p className="my-profile">Мій кабінет</p>
                      <img className="account-icon" src={"../../images/icons/account-24px.png"}/>
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
