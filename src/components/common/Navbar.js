import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialNetworks from "./SocialNetworks";
import "./css/navbar.scss";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-xl fixed-top">
      <div className="container-fluid">
        <div className="container">
          <img
            className="d-block d-xl-none"
            src={require("../../images/icons/search-24px-white.svg")}
          />
          <NavLink to="/" className="navbar-brand">
            {" "}
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
                <NavLink to="/" className="nav-link">
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
                  Статті <i className="fa fa-angle-down arrow-down" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink to="/" className="dropdown-item">
                    Усі рубрики
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Світ
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Економіка
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Культура
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Політика
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Наука
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Суспільство
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Історія
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Подорожі
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Війна
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Авто
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Спецтеми
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Колонки
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Фоторепортаж
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/journals" className="nav-link">
                  Журнал
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
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
              <p className="separator">|</p>
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
