// Core
import React from 'react';

// Assets
import logo from 'assets/logo.svg';

export const Menu = () => {
  return (
    <header className="navbar" id="navbar">
      <div className="container navbar__menu">
        <a className="logo pull-left" href="#">
          <img src={logo} alt="Главная"/>
        </a>
        <div className="navbar-collapse_wrapper">
          <div className="navbar-collapse collapse">
            <nav>
              <ul className="menu nav navbar_navig">
                <li>
                  <a href="#">Поддержка Drupal</a>
                </li>
                <li>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Администрирование
                    <span className="caret"></span>
                  </a>
                  <div className="container-fluid dropdown-menu_wrap">
                    <ul className="menu dropdown-menu">
                      <li><a href="#"> Миграция </a></li>
                      <li><a href="#"> Бэкапы </a></li>
                      <li><a href="#"> Аудит безопасности </a></li>
                      <li><a href="#"> оптимизация скорости </a></li>
                      <li><a href="#"> Переезд на https</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Продвижение</a>
                </li>
                <li>
                  <a href="#">Реклама</a>
                </li>
                <li>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">О нас
                    <span className="caret"></span>
                  </a>
                  <div className="container-fluid dropdown-menu_wrap">
                    <ul className="menu dropdown-menu">
                      <li><a href="#">Команда </a></li>
                      <li><a href="#">Drupalgive </a></li>
                      <li><a href="#">Блог </a></li>
                      <li><a href="#">Курсы Drupal </a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Проекты</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"></button>
      </div>
    </header>
  );
};