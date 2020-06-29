import React from "react";
import { NavLink } from "react-router-dom";
import SocialNetworks from "./SocialNetworks";

import categoriesData from "./categories.json";
import "./css/navbar.scss";

const Header = props => {
  const activeStyle = {
    color: "#ED1B2F"
  };
  const categoriesComponents = categoriesData
    .slice(1, categoriesData.length)
    .map(category => (
      <NavLink
        key={category.category_id}
        activeStyle={activeStyle}
        to={`/articles/${category.category_id}/page=1`}
        className="dropdown-item"
      >
        {category.category_name}
      </NavLink>
    ));
  return (
    <nav className="navbar navbar-expand-xl fixed-top">
      <div className="container-fluid">
        <div className="container">
          <img
            className="d-block d-xl-none"
            src={require("../../images/icons/search-24px-white.svg")}
          />
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
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

              <li className="nav-item dropdown">
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
                    Усі рубрики
                  </NavLink>
                  {categoriesComponents}
                </div>
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
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  to="/subscribe"
                  className="nav-link"
                >
                  Передплата
                </NavLink>
              </li>
            </ul>
            <div className="navbar-text">
              <img
                className="search-small"
                alt=""
                src={require("../../images/icons/search-24px.svg")}
              />
              <p className="separator separator-navbar">|</p>
              <p className="uk-week">The Ukrainian Week</p>
              <div className="d-block d-xl-none">
                <SocialNetworks color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
