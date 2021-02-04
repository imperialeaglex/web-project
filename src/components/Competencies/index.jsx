import Reac from 'react';
import { Competency } from '../Competency';
import img1 from '../../assets/competencies/competency-1.svg';
import img2 from '../../assets/competencies/competency-2.svg';
import img3 from '../../assets/competencies/competency-3.svg';
import img4 from '../../assets/competencies/competency-4.svg';
import img5 from '../../assets/competencies/competency-5.svg';
import img6 from '../../assets/competencies/competency-6.svg';
import img7 from '../../assets/competencies/competency-7.svg';
import img8 from '../../assets/competencies/competency-8.svg';

export const Competencies = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const descriptions = [
    <div className="competency-body">
      Добавление<br/> информации на сайт,<br/> создание новых<br/> разделов
    </div>,
    <div className="competency-body">
      Разработка <br/> и оптимизация <br/> модулей сайта
    </div>,
    <div className="competency-body">
      Интеграция с CRM,<br/> 1C, платежными<br/> системами, любыми<br/> веб-сервисами
    </div>,
    <div className="competency-body">
      Любые доработки <br/> функционала <br/> и дизайна
    </div>,
    <div className="competency-body">
      Аудит и мониторинг <br/> безопасности Drupal <br/> сайтов
    </div>,
    <div className="competency-body">
      Миграция, импорт <br/> контента и апгрейд <br/> Drupal
    </div>,
    <div className="competency-body">
      Оптимизация <br/> и ускорение <br/> Drupal сайтов
    </div>,
    <div className="competency-body">
      Веб-маркетинг, <br/> консультации <br/> и работы по SEO
    </div>
  ];

  const CompetenciesJSX = descriptions.map((description, i) => (
    <Competency description={description}>
      <img src={images[i]} className="img-responsive" alt="1"/>
    </Competency>
  ));

  return (
    <div className="container competencies">
      <div className="row">
        <div className="col-md-6">
          <h2 className="block_title">
            13 лет совершенствуем <br/> компетенции в Друпал <br/> поддержке!
          </h2>
          <div className="competencies-description">
            Разрабатываем и оптимизируем модули, расширяем <br/> функциональность сайтов, обновляем дизайн
          </div>
        </div>
      </div>
      <div className="row row-flex competencies-row">
        {CompetenciesJSX}
      </div>
    </div>
  );
};
