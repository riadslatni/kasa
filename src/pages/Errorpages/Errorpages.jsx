import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import Footer from '../../layout/Footer/Footer';

export default function Errorpages() {
  return (
    <div>
      <div className="error-page">
        <div>
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}
