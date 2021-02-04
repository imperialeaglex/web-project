import React from 'react';

export const Person = ({ name, description, children }) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 views-row">
      <div className="user-teaser">
        <div className="user-teaser-photo">
          {children}
        </div>
        <div className="user-teaser-name">
          <a href="#">
            {name}
          </a>
        </div>
        <div className="user-teaser-post">
          {description}
        </div>
      </div>
    </div>
  );
};
