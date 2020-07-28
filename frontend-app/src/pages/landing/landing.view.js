import React from 'react';
import styles from "./landing.module.css";
import {Link} from "react-router-dom";
import {LOGIN, SIGNIN} from "../../routes/routes";

const Landing = () => {

    return (
        <div className={styles.__contenedorLanding}>
            <div className={styles.__elementosLanding}>
                <img className={styles.__logo} src={'https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png'} alt={'Error'}/>
                <h1 className={styles.__title}>Welcome to Pinterest!</h1>
                <span className={styles.__textoLanding}>Log in or register and start discovering.</span>

                <div className={styles.__contenedorBotones}>
                    <Link className={styles.__link} to={LOGIN}><span className={styles.__pagina__logIn}>Log In</span></Link>
                    <Link className={styles.__link} to={SIGNIN}><span className={styles.__pagina__signIn}>Sign in</span></Link>
                </div>
            </div>
            <img className={styles.__imgBackgroundHome} src={'https://store-images.s-microsoft.com/image/apps.18327.14204669951057618.66f35ee3-03b9-46a6-b185-b9ce0ffda2f4.2f04a50a-ae96-4ed4-a762-3b3e097eb58f?mode=scale&q=90&h=720&w=1280'} alt={'Error'}/>
        </div>
    );
};

export default Landing;