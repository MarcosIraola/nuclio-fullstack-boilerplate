import React from 'react';
import ListPins from "../../components/pins/listPin/listPins.view";
import styles from './home.module.css';
import {Link} from "react-router-dom";
import {LANDING, PINBOARDFORM} from "../../routes/routes";
import {isAuthenticated} from "../../utils/localStorage.utils";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navBar/navBar.view";

const Home = () => {

    const history = useHistory();

    return (
        <>
            {isAuthenticated()
                ?
                <div className={styles.__contenedor}>
                    <NavBar/>
                    <ListPins/>
                    <div className={styles.__contenedorFavButtons}>
                        <Link to={PINBOARDFORM}><img src={'https://image.flaticon.com/icons/png/512/20/20183.png'} className={styles.__fav__button}/></Link>
                        <img src={'https://image.flaticon.com/icons/png/512/36/36601.png'} className={styles.__fav__button}/>
                    </div>
                </div>
                :
                history.replace(LANDING)
            }
        </>
    )
}

export default Home;





