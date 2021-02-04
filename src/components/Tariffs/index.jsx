import React from 'react';

export const Tariffs = () => {
  return (
    <div className="block-tariffs">
      <div className="block-title-tariffs">
        Тарифы
      </div>
      <div className="tariffs" id="tariffs">
        <div className="container">
          <div className="row row-flex tariffs-row">
            <div className="col-sm-4 col-xs-12 col-flex">
              <div className="tariff">
                <div className="tariff-wrapper">
                  <div className="tariff-header">
                    <div className="tariff-title">
                      Стартовый
                    </div>
                    <br/>
                  </div>
                  <div className="tariff-body">
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Консультации и работы по SEO
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Услуги дизайнера
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Неиспользованные оплаченные часы переносятся на следующий месяц
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Предоплата от 6 000 рублей в месяц
                    </div>
                  </div>
                  <div className="tariff-footer">
                    <a href="#" className="contact-form tariff-footer-btn"> Свяжитесь с нами! </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 col-flex">
              <div className="tariff">
                <div className="tariff-wrapper">
                  <div className="tariff-header">
                    <div className="tariff-title">
                      Бизнес
                    </div>
                    <br/>
                  </div>
                  <div className="tariff-body">
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Консультации и работы по SEO
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Услуги дизайнера
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Высокое время реакции - до 2 рабочих дней
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Неиспользованные оплаченные часы не переносятся
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Предоплата от 30 000 рублей в месяц
                    </div>
                  </div>
                  <div className="tariff-footer">
                    <a href="#" className="contact-form tariff-footer-btn"> Свяжитесь с нами! </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 col-flex">
              <div className="tariff">
                <div className="tariff-wrapper">
                  <div className="tariff-header">
                    <div className="tariff-title">
                      VIP
                    </div>
                    <br/>
                  </div>
                  <div className="tariff-body">
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Консультации и работы по SEO
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Услуги дизайнера
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Максимальное время реакции - в день обращения
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Неиспользованные оплаченные часы не переносятся
                    </div>
                    <div className="tariff-body-item">
                      <i className="fa fa-check" aria-hidden="true"/>Предоплата от 270 000 рублей в месяц
                    </div>
                  </div>
                  <div className="tariff-footer">
                    <a href="#" className="contact-form tariff-footer-btn"> Свяжитесь с нами! </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="tariff-dop">
                Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!<br/>
                <a href="#" className="contact-form tariffs-link">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
