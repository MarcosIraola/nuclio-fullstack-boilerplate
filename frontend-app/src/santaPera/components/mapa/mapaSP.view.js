import React from 'react';
import styles from './mapaSP.module.css'
import mapaSP from './mapaSP.png';

const MapaSP = () => {

    return (
      <div className={styles.__contenedor}>
          <span className={styles.__titulo}>COMO LLEGAR</span>
          <img className={styles.__foto} src={mapaSP}/>
      </div>
    );
}

export default MapaSP;