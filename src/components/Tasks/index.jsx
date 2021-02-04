import React from 'react';
import img1 from 'assets/tasks/task1.svg';
import img2 from 'assets/tasks/task2.svg';
import img3 from 'assets/tasks/task3.svg';

export const Tasks = () => {
  return (
    <div className="block-zhadachi competencies">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="block_title">
              Наши профессиональные разработчики выполняют быстро любые задачи
            </h2>
            <div className="competencies-description"></div>
          </div>
        </div>
        <div className="row row-flex competencies-row">
          <div className="col-sm-4 col-xs-12">
            <div className="competency">
              <div className="competency-wrapper">
                <div className="competency-header">
                  <div className="competency-icon">
                    <img src={img1} className="img-responsive" alt="#"/>
                  </div>
                  <div className="competency-body">
                    <div className="competency-time">
                      от 1ч
                    </div>
                    Настройка события GA <br/> в интернет-магазине
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="competency">
              <div className="competency-wrapper">
                <div className="competency-header">
                  <div className="competency-icon">
                    <img src={img2} className="img-responsive" alt="#"/>
                  </div>
                  <div className="competency-body">
                    <div className="competency-time">
                      от 20ч
                    </div>
                    Разработка мобильной <br/> версии сайта
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="competency">
              <div className="competency-wrapper">
                <div className="competency-header">
                  <div className="competency-icon">
                    <img src={img3} className="img-responsive" alt="#"/>
                  </div>
                  <div className="competency-body">
                    <div className="competency-time">
                      от 8ч
                    </div>
                    Интеграция <br/> модуля оплаты
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
