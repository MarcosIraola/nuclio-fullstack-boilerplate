import React from 'react';
import ListPins from "../../components/listPin/listPins.view";
import styles from './home.module.css';

const Home = () => {

    return (
        <div>
            <ListPins/>
            <div className={styles.__contenedor}>
                <img src={'https://image.flaticon.com/icons/png/512/20/20183.png'} className={styles.__fav__button}/>
                <img src={'https://image.flaticon.com/icons/png/512/36/36601.png'} className={styles.__fav__button}/>
            </div>
        </div>
    )
}

export default Home;