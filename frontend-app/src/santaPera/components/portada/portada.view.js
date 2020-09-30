import React from 'react';
import styles from './portada.module.css';
import flyer from './flyer.png';
import titulo from './titulo.png';
import vol2 from './vol2.png';
import fecha from './fecha.png';
import lugar from './lugar.png';
import detalle from './detalle.png';

const PortadaSP = () => {

    return (
      <div className={styles.__contenedor}>
          <img className={styles.__mainPic} src={flyer}/>

          <div className={styles.__texto}>
              <img className={styles.__titulo} src={titulo}/>
              <img className={styles.__vol2} src={vol2}/>
              <img className={styles.__fecha} src={fecha}/>
              <img className={styles.__detalle} src={detalle}/>
              <img className={styles.__lugar} src={lugar}/>
          </div>

      </div>
    );
}

export default PortadaSP;