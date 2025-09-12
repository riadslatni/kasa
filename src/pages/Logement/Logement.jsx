import React from 'react';
import './logement.css';
import { Collapse } from '../../components/Collapse/Collapse';
import datas from '../../Data/Data.json';

import { SlideShow } from '../../components/SlideShow/SlideShow';
import ApartmentHeader from '../../components/LogementHEADER/LogementHeader'; // Correction ici
import { useParams } from 'react-router-dom';

function Logement() {
  const idApartment = useParams().id;

  console.log('ID reçu:', idApartment);
  console.log('IDs JSON:', datas.map(d => d.id));
  const currentApartment = datas.find(data => data.id === idApartment);

  if (!currentApartment) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className='logement-page'>
      <SlideShow pictures={currentApartment.pictures} numberPhotos={currentApartment.pictures.length} />
      <ApartmentHeader currentApartment={currentApartment} />
      <div className='logement__desc__area'>
        <Collapse title="Description" content={currentApartment.description} />
        <Collapse title="Équipements" content={currentApartment.equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
        ))} />
      </div>
    </div>
  );
}

export default Logement;