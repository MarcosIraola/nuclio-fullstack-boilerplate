import React from 'react';
import {Link} from "react-router-dom";
import ListPins from "../../components/pins/listPin/listPins.view";
import styles from './home.module.css';
import { PINBOARDFORM } from "../../routes/routes";
import NavBar from "../../components/navBar/navBar.view";

const Home = () => {

    return (
        <div className={styles.__contenedor}>
            <NavBar/>
            <ListPins/>
            <div className={styles.__contenedorFavButtons}>
                <Link to={PINBOARDFORM}><img src='https://image.flaticon.com/icons/png/512/20/20183.png' className={styles.__fav__button} alt='Error'/></Link>
                <img src='https://image.flaticon.com/icons/png/512/36/36601.png' className={styles.__fav__button} alt='Error'/>
            </div>
        </div>
    )
}

export default Home;





