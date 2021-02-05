// Core
import React from 'react';

// Components
import { Advantage } from 'components/Advantage';

// Assets
import img1 from 'assets/advantages/support1.svg';
import img2 from 'assets/advantages/support2.svg';
import img3 from 'assets/advantages/support3.svg';
import img4 from 'assets/advantages/support4.svg';
import img5 from 'assets/advantages/support5.svg';
import img6 from 'assets/advantages/support6.svg';
import img7 from 'assets/advantages/support7.svg';
import img8 from 'assets/advantages/support8.svg';

export const Advantages = () => {
  const titles = [
    'Поставновка задачи по Email',
    'Система Helpdesk - отчетность, прозрачность',
    'Расширенная техническая поддержка',
    'Персональный менеджер проекта',
    'Удобные способы оплаты',
    'работаем с SLA и NDA',
    'Штатные специалисты',
    'Удобные каналы связи'
  ];

  const bodies = [
    'Удобная и привычная постановка задач, при которой задачи фиксируются и никогда не теряются.',
    'Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.',
    'Возможность организации расширенной технической поддержки с 6:00 до 22:00 без выходных',
    'Ваш менеджер всегда вкурсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.',
    'Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, PayPal.',
    'Работа в рамках соглашений конфеденциальности и об уровне качества работ.',
    'Надежные штатные специалисты, никаких фрилансеров.',
    'Консультации по телефону, скайпу, мессенджерах.'
  ];

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const advantagesJSX = titles.map((title, i) => (
    <Advantage number={i + 1} title={title} body={bodies[i]} key={i}>
      <img src={images[i]} className="img-responsive" alt="#"/>
    </Advantage>
  ));

  return (
    <div className="advantages">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="block-title">
              Поддержка <br/> от Drupal-coder
            </h2>
          </div>
        </div>
        <div className="row row-flex advantages-row">
          {[...advantagesJSX]}
        </div>
      </div>
    </div>
  );
};
