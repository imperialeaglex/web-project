import React from 'react';
import { Form } from 'components/Form';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container pb">
        <div className="col-md-6 col-xs-12 col-sm-6 ma">
          <div className="block-form-wrapper">
            <div className="block-form-title">
              Оставить заявку на <br/> поддержку сайта
            </div>
            <div className="block-form-description">
              Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик
              не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
            </div>
            <div className="block-form-contacts">
              <ul>
                <li className="block-form-phone">
                  <i className="fa fa-phone" aria-hidden="true"/><a className="num-form">8 800 222-26-73</a>
                </li>
                <li className="block-form-email">
                  <i className="fa fa-envelope-o" aria-hidden="true"/><a className="email-form">info@drupal-coder.ru</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Form/>
      </div>
    </footer>
  );
};