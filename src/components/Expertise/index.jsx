import React from 'react';

export const Expertise = ({title}) => {
  return (
    <div className="col-sm-6 col-xs-12 expertise-col">
      <div className="expertise-item">
        <div className="expertise-item-body">
          {title}
        </div>
      </div>
    </div>
  );
};
