import React from 'react';
import mamaShooterImage from './rick.png';

function MamaShooter() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
      <img src={mamaShooterImage} alt="Mama Shooter" style={{ width: '60%', maxWidth: '800px', marginBottom: '20px' }} />
      <h1>mama-shooter</h1>
      <p>Check out the game here:</p>
      <a href="https://immortalll.itch.io/mama-shooterxpolygon" target="_blank">mama-shooter-web3</a>
    </div>
  );
}

export default MamaShooter;
