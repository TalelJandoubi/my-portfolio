// src/components/NewPage.js
import React from 'react';
import ConnectFour from './ConnectFour';

const NewPage = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
      <h1 style={{ marginBottom: '50px', fontFamily: 'Arial' }}>Puissance 4 : Amusez-vous bien !</h1>
      <h2 style={{ marginBottom: '50px', fontFamily: 'Arial' }}>Mais recrutez-moi avant ! 😉</h2>
      <ConnectFour />
    </div>
  );
};

export default NewPage;
