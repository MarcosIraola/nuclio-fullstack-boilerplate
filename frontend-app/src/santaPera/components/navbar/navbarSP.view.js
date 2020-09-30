import React from 'react';
import styles from './navbarSP.module.css';
import pera from './assets/pera.jpeg';
import santaperatitulo from './assets/santaperatitulo.png';

const NavbarSP = () => {

    return (
      <nav className={styles.__contenedor}>
          <div>
              <img className={styles.__logo} src={pera}/>
              <img className={styles.__tituloStaPera} src={santaperatitulo}/>
          </div>
          <div className={styles.__titulos}>
              <span className={styles.__boton}>INICIO</span>
              <span className={styles.__boton}>EXPOSITORES</span>
              <span className={styles.__boton}>COMO LLEGAR</span>
              <span className={styles.__boton}>PARTICIPA</span>
              <span className={styles.__boton}>CONTACTO</span>
          </div>
      </nav>
    );
}

export default NavbarSP;