import React, { useState } from 'react';
import './slideShow.css';
import aboutBanner from '../../assets/background.jpg';

export function SlideShow({ pictures, numberPhotos }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const moveToNext = () => {
    setCurrentPicture((prev) => (prev + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    setCurrentPicture((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  if (!pictures || pictures.length === 0) {
    return (
      <div className="image__banner_img">
        <img src={aboutBanner} alt="image par défaut" className="show" />
      </div>
    );
  }

  return (
    <div className="image__banner_img">
      <div className="image__container">
        <img
          src={pictures[currentPicture]}
          alt={`photo ${currentPicture + 1}`}
          className="show"
        />
      </div>

      {numberPhotos > 1 && (
        <>
          <button
            className="btn btn-previous"
            onClick={moveToPrevious}
            aria-label="Image précédente"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <span className="slide__counter">
            {currentPicture + 1} / {pictures.length}
          </span>

          <button
            className="btn btn-next"
            onClick={moveToNext}
            aria-label="Image suivante"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
export default SlideShow;