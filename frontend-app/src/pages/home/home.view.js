import React from 'react';
import ListPins from "../../components/listPin/listPins.view";
import styles from './home.module.css';
import {Link} from "react-router-dom";
import {PINBOARDFORM} from "../../routes/routes";
import {isAuthenticated} from "../../utils/localStorage.utils";

const Home = () => {

    return (

        <div>
            { isAuthenticated()
                ?
                <div className={styles.__contenedor}>
                    <ListPins/>
                    <div className={styles.__contenedorFavButtons}>
                        <Link to={PINBOARDFORM}><img src={'https://image.flaticon.com/icons/png/512/20/20183.png'} className={styles.__fav__button}/></Link>
                        <img src={'https://image.flaticon.com/icons/png/512/36/36601.png'} className={styles.__fav__button}/>
                    </div>
                </div>
                :
                <div className={styles.__contenedorLanding}>
                    <div className={styles.__elementosLanding}>
                        <img className={styles.__logo} src={'https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png'}/>
                        <h1 className={styles.__title}>Welcome to Pinterest!</h1>
                        <span className={styles.__textoLanding}>Log in or register and start discovering</span>
                    </div>
                    <img className={styles.__imgBackgroundHome} src={'https://store-images.s-microsoft.com/image/apps.18327.14204669951057618.66f35ee3-03b9-46a6-b185-b9ce0ffda2f4.2f04a50a-ae96-4ed4-a762-3b3e097eb58f?mode=scale&q=90&h=720&w=1280'}/>
                </div>
            }
        </div>
    )
}

export default Home;





