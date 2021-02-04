import React from 'react';

export const Competency = ({ description, children }) => {
  return (
    <div className="col-sm-3 col-xs-6">
      <div className="competency competency-wrapper">
        <div className="competency-header">
          <div className="competency-icon">
            {children}
          </div>
        </div>
        {description}
      </div>
    </div>
  );
};