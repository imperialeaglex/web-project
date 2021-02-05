// Core
import React from 'react';

// Assets
import img1 from 'assets/cases/case1.png';
import img2 from 'assets/cases/case2.png';
import img3 from 'assets/cases/case3.png';
import img4 from 'assets/cases/case4.png';
import img5 from 'assets/cases/case5.png';

export const Cases = () => {
  return (
    <div className="news container">
      <div className="block-title">
        Последние кейсы
      </div>
      <div>
        <div className="view-content news__main">
          <article about="#" className="blog q1">
            <div className="keys1-wrapper q1p">
              <div className="keys1-picture">
                <img src={img1} width="360" height="215" alt="#"/>
              </div>
            </div>
          </article>
          <article className="keys1-container q2">
            <div className="keys1-header">
              <h2>
                <a href="#">
                  <span>
                    Настройка кэширования данных. Апгрейд сервера. Ускорение работы сайта в 30 раз!
                  </span>
                </a>
              </h2>
              <div className="keys1-header-date">04.05.2020</div>
            </div>
            <div className="keys1-body">
              <p>Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...</p>
            </div>
          </article>
          <article about="#" className="blog q3">
            <div className="keys2-wrapper">
              <div className="keys2-picture">
                <img src={img2} width="800" alt="#"/>
              </div>
            </div>
          </article>
          <article about="#" className="blog q4">
            <div className="keys1-wrapper">
              <div className="keys1-picture">
                <img src={img3} height="480" alt="#"/>
              </div>
            </div>
          </article>
          <article about="#" className="blog q5">
            <div className="keys1-wrapper">
              <div className="keys1-picture">
                <img src={img4} height="480" alt="#"/>
              </div>
            </div>
          </article>
          <article about="#" className="blog q6">
            <div className="keys1-wrapper q1p">
              <div className="keys1-picture">
                <img src={img5} height="250" alt="#"/>
              </div>
            </div>
          </article>
          <div className="keys1-container">
            <div className="keys1-header q7">
              <h2>
                <a href="#">
                  <span>
                    Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1С: Предприятие, МойСклад, Класс365
                  </span>
                </a>
              </h2>
              <div className="keys1-header-date">
                22.08.2019
              </div>
            </div>
            <div className="keys1-body">
              <p>Опубликован релиз модуля...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
