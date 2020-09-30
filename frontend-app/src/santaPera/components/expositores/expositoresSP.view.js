import React from 'react';
import styles from './expositoresSP.module.css';

const ExpositoresSP = () => {

    return (
        <div className={styles.__contenedor}>
            <h1 className={styles.__titulo}>EXPOSITORES <br/> DE LA PRÓXIMA EDICIÓN</h1>

            <div className={styles.__contenedor__expositores}>

                <div className={styles.__caja}>
                    <img className={styles.__imgCaja} src="https://palomarketfest.com/img/edition/pam-market/118/exhibitor/1637/street_food.jpg"/>
                    <span className={styles.__tituloCaja}>STREET FOOD</span>
                    <span className={styles.__subTituloCaja}>Los mejores foodtrucks del momento</span>
                </div>

                <div className={styles.__caja}>
                    <img className={styles.__imgCaja} src="https://palomarketfest.com/img/edition/pam-market/118/exhibitor/1638/design_gallery.jpg"/>
                    <span className={styles.__tituloCaja}>DESIGN GALLERY</span>
                    <span className={styles.__subTituloCaja}>Diseñadores y artesanos contemporáneos</span>
                </div>

                <div className={styles.__caja}>
                    <img className={styles.__imgCaja} src="https://palomarketfest.com/img/edition/pam-market/118/exhibitor/1639/whatsapp_image_2017_06_20_at_124401.jpeg"/>
                    <span className={styles.__tituloCaja}>CONCEPT GALLERY</span>
                    <span className={styles.__subTituloCaja}>Marcas premium</span>
                </div>

                <div className={styles.__caja}>
                    <img className={styles.__imgCaja} src="https://palomarketfest.com/img/edition/pam-market/118/exhibitor/1640/captura_de_pantalla_2019_10_22_a_las_135710.png"/>
                    <span className={styles.__tituloCaja}>STREET MARKET</span>
                    <span className={styles.__subTituloCaja}>Diseñadores y artesanos contemporáneos</span>
                </div>

            </div>

        </div>
    );
}

export default ExpositoresSP;