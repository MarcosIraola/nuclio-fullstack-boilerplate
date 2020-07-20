import React from 'react';
import ListPins from "../../components/listPin/listPins.view";
import styles from './home.module.css';
import {Link} from "react-router-dom";
import {PINFORMBOARD} from "../../routes/routes";

const Home = () => {

    return (
        <div className={styles.__contenedor}>
            <ListPins/>
            <div className={styles.__contenedorButtons}>
                <Link to={PINFORMBOARD}><img src={'https://image.flaticon.com/icons/png/512/20/20183.png'} className={styles.__fav__button}/></Link>
                <img src={'https://image.flaticon.com/icons/png/512/36/36601.png'} className={styles.__fav__button}/>
            </div>
        </div>
    )
}

export default Home;