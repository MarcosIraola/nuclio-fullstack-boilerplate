import React from 'react';
import styles from './navBar.module.css';
import { Link } from "react-router-dom";
import { HOME, PERFILUSER } from "../../routes/routes";

const NavBar = () => {

    return(
        <nav>
            <Link to={HOME}><img src={'https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png'} className={styles.__imagenes}/></Link>
            <Link className={styles.__link} to={HOME}><span className={styles.__paginas}>Home</span></Link>
            <input type={'text'} className={styles.__buscador} placeholder={'Search'}/>

            <div>
                <img src={'https://cdn.icon-icons.com/icons2/494/PNG/512/alarm_icon-icons.com_48364.png'} className={styles.__imagenes}/>
                <img src={'https://cdn.icon-icons.com/icons2/1558/PNG/512/353440-bubble-chat-dots-speech-talk_107494.png'} className={styles.__imagenes}/>
                <Link to={PERFILUSER}><img src={'https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-username_97587.png'} className={styles.__imagenes}/></Link>
            </div>

        </nav>
    )
}

export default NavBar;