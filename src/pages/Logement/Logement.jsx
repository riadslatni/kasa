import React, { useEffect, useState } from 'react';
import './logement.css';
import { Collapse } from '../../components/Collapse/Collapse';
import datas from '../../data/data.json';
import { SlideShow } from '../../components/SlideShow/SlideShow';
import ApartmentHeader from '../../components/LogementHeader/LogementHeader';
import { useParams } from 'react-router-dom';



function Logement() {

  const [image, setImage] = useState([]);

  const idApartment = useParams("id").id;
  const currentApartment = datas.filter(data => data.id === idApartment);

  useEffect(() => {
		const currentApartment = datas.filter(data => data.id === idApartment);
		setImage(currentApartment[0].pictures);
	}, [idApartment]);

  return (
    <div className='logement-page'>
      <SlideShow pictures={currentApartment[0].pictures} numberPhotos={currentApartment[0].pictures.length} />
      <ApartmentHeader currentApartment={currentApartment[0]} />
      <div className='logement__desc__area'>
        <Collapse title="Description" content={currentApartment[0].description} />
        <Collapse title="Équipements" content={currentApartment[0].equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
        ))} />
      </div>
    </div>
  );
}

export default Logement