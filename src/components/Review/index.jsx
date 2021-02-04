import React from 'react';

export const Review = ({children, content, description}) => {
  return (
    <div className="slide">
      <div className="image-logo">
        {children}
      </div>
      <div className="field-content1">
        {content}
      </div>
      <div className="views-field views-field-field-report-author">
        <div className="field-content">
          {description}
        </div>
      </div>
    </div>
  )
}