import "./About.css"; 
import data from "../../data/Data-about.json"; 
import { Collapse } from "../../components/Collapse/Collapse.jsx"; 

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container banner-container">
        
        <img src="/img-accueil.png" alt="Accueil" className="banner" />
      </div>
    {data.map((about) => (
  <Collapse
    key={about.id}
    title={about.title}
    content={about.content}
    variant="about" 
  />
))}

    </div>
  );
}
