import React from 'react';
import { Person } from 'components/Person';
import img1 from 'assets/team/person1.jpg';
import img2 from 'assets/team/person2.jpg';
import img3 from 'assets/team/person3.jpg';
import img4 from 'assets/team/person4.jpg';
import img5 from 'assets/team/person5.jpg';

export const Team = () => {
  const images = [img1, img2, img3, img4, img5];

  const names = [
    'Сергей Синица',
    'Роман Агабеков',
    'Алексей Синица',
    'Дарья Бочкарёва',
    'Ирина Торкунова'
  ];

  const descriptions = [
    'Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора',
    'Руководитель отдела DevOPS, директор',
    'Руководитель отдела поддержки сайтов',
    'Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов',
    'Менеджер по работе с клиентами'
  ];

  const personJSX = names.map((name, i) => (
    <Person name={name} description={descriptions[i]}>
      <img src={images[i]} width="280" height="280" className="img-responsive" alt="#"/>
    </Person>
  ));

  return (
    <div className="team container">
      <h2 className="block-title">
        Команда
      </h2>
      <div className="form-group">
        <div className="view-content">
          {[...personJSX]}
        </div>
        <div className="more-link form-group">
          <a href="#"> вся команда</a>
        </div>
      </div>
    </div>
  );
};
