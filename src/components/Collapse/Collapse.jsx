import React, { useState } from 'react';
import './collapse.css';

export function Collapse({ title, content }) {
  const [isShow, setIsShow] = useState(false);

  const toggleContent = () => {
    setIsShow(!isShow);
  };

  const chevronClass = (isShow ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  return (
    <div className="collapse__panel">
      <p className="collapse__header" onClick={toggleContent}>
        <span>{title}</span>
        <i className={chevronClass}></i>
      </p>
      {isShow && <p className="collapse__content">{content}</p>}
    </div>
  );
}

