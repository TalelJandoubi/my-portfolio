// src/components/NewPage.js
import React from 'react';
import ConnectFour from './ConnectFour';
import './NewPage.css';  // Assurez-vous de créer et d'importer ce fichier CSS

const NewPage = () => {
  return (
    <div className="new-page">
      <h1 className="main-title">Puissance 4 : Amusez-vous bien !</h1>
      <h2 className="sub-title">Mais recrutez-moi avant ! 😉</h2>
      <ConnectFour />
    </div>
  );
};

export default NewPage;
