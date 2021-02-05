// Core
import React from 'react';

export const Advantage = ({ number, title, body, children }) => {
  return (
    <div className="col-sm-6 col-md-3 col-xs-12">
      <div className="advantage">
        <div>
          <div className="advantage-num">
            {number}.
          </div>
          <div className="advantage-title">
            {title}
          </div>
        </div>
        <div className="advantage-body">
          {body}
        </div>
        <div className="advantage-icon">
          {children}
        </div>
      </div>
    </div>
  );
};
