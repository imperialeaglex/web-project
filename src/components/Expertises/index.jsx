// Core
import React from 'react';

// Components
import { Expertise } from 'components/Expertise';

// Assets
import img from 'assets/laptop.png';

export const Expertises = () => {
  const titles = [
    'Только системный подход – контроль версий, резервирование и тестирование!',
    'Только Drupal сайты, не берем на поддержку сайты на других CMS!',
    'Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем модули Drupal',
    'Поддерживаем сайты на Drupal 5, 6, 7 и 8'
  ];

  const expertisesJSX = titles.map((title, i) => (
    <Expertise title={title} key={i}/>
  ));

  return (
    <div className="expertise">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12 col-md-offset-6 expertises__ee">
            <div className="row">
              <div className="col-md-12">
                <h2 className="block_title"> Экспертиза в Drupal, опыт 14 лет! </h2>
              </div>
            </div>
            <div className="row row-flex expertise-row">
              {[...expertisesJSX]}
            </div>
          </div>
        </div>
      </div>
      <div className="expertise-img">
        <img src={img} className="img-responsive" alt="#"/>
      </div>
    </div>
  );
};