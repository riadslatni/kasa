import React from 'react';
import './logementHeader.css';
import Tags from '../Tags/Tags';
import RatingStars from '../RatingStars/RatingStars';

function LogementHeader({ currentApartment }) {
  const name = currentApartment.host.name.split(' ');

  return (
    <section className="apartment__header">
      <div className="apartment__title">
        <h1>{currentApartment.title}</h1>
        <p>{currentApartment.location}</p>
        <Tags tags={currentApartment.tags} />
      </div>

      <div className="apartment__owner">
        <div className="apartment__owner__details">
          <h3>
            <span>{name[0]}</span>
            <span>{name[1]}</span>
          </h3>
          <div className="apartment__owner__badge">
            <img 
              src={currentApartment.host.picture} 
              alt={currentApartment.host.name} 
            />
          </div>
        </div>
        <RatingStars rating={currentApartment.rating} />
      </div>
    </section>
  );
}

export default LogementHeader;
