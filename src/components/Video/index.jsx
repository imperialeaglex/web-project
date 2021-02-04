import React from 'react';
import video from 'assets/video.mp4';
import cup from 'assets/cup.png';

export const Video = () => {
  return (
    <div className="main_block video__main">
      <div className="main_block_background">
        <video playsInline autoPlay="autoplay" loop preload="auto" muted>
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 nav__title">
            <h1 className="page-title">
              Разработка <br/> сайтов на Drupal
            </h1>
            <div className="suppor-main-description">
              Сопровождение и поддержка сайтов <br/> на CMS Drupal любых версий и запущенности
            </div>
            <div className="block-main-wrapper nav-tariff-button">
              <a href="#tariffs" className="block-main-btn flowing-scroll"> Тарифы</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row support-achievements">
              <div className="col-md-4 col-sm-4 col-xs-6 support-achievement">
                <div className="support-achievement-wrapper">
                  <div className="support-achievement-title">
                    #1 <img src={cup} alt="#"/>
                  </div>
                  <div className="support-achievement-description">
                    Drupal разработчик <br/> В России по версии <br/> Рейтинга Рунета
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 support-achievement">
                <div className="support-achievement-wrapper">
                  <div className="support-achievement-title">
                    3+
                  </div>
                  <div className="support-achievement-description">
                    средний опыт<br/> специалистов более <br/> трех лет
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 support-achievement">
                <div className="support-achievement-wrapper">
                  <div className="support-achievement-title">
                    14
                  </div>
                  <div className="support-achievement-description">
                    лет опыта в сфере <br/> Drupal
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 support-achievement">
                <div className="support-achievement-wrapper">
                  <div className="support-achievement-title">
                    50+
                  </div>
                  <div className="support-achievement-description">
                    модулей и тем<br/> в формате DrupalGive
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 support-achievement">
                <div className="support-achievement-wrapper">
                  <div className="support-achievement-title">
                    90 000+
                  </div>
                  <div className="support-achievement-description">
                    часов поддержки <br/>сайтов на Drupal
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 support-achievement">
                <div className="support-achievement-wrapper">
                  <div className="support-achievement-title">
                    300+
                  </div>
                  <div className="support-achievement-description">
                    Проектов <br/>на поддержке
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};