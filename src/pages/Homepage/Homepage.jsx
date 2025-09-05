import '../../components/Card/Card.css';
import Card from '../../components/Card/Card.jsx';
import './Homepage.css';
import data from '../../Data/Data.json';
export default function Homepage() {
 
 

  return (

    <div className="homepage">
      <div className="banner-container">
        <img src="/Banner.png" alt="Accueil" className="banner" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      
      <div className="cards-container">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>

    </div>
  );
}
