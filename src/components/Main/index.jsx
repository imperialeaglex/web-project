// Core
import React from 'react';

// Components
import { Competencies } from 'components/Competencies';
import { Advantages } from 'components/Advantages';
import { Expertises } from 'components/Expertises';
import { Tariffs } from 'components/Tariffs';
import { Tasks } from 'components/Tasks';
import { Team } from 'components/Team';
import { Cases } from 'components/Cases';
import { Reviews } from 'components/Reviews';
import { WorkWithUs } from 'components/WorkWithUs';
import { Faq } from 'components/Faq';

export const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="region region-fw-content">
        <div className="content">
          <Competencies/>
          <Advantages/>
          <Expertises/>
          <Tariffs/>
          <Tasks/>
          <Team/>
          <Cases/>
          <Reviews/>
          <WorkWithUs/>
          <Faq/>
        </div>
      </div>
    </div>
  );
};