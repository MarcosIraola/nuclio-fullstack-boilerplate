import React from 'react';
import styles from './navBar.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {

    return(
        <nav>
            <Link to="/home"><img src={'https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png'} className={styles.__imagenes}/></Link>
            <Link className={styles.__link} to="/home"><span className={styles.__paginas}>Home</span></Link>
            <input type={'text'} className={styles.__buscador} placeholder={'Search'}/>
            <Link className={styles.__link} to="/login"><span className={styles.__paginas}>Login</span></Link>
            <Link className={styles.__link} to="/signin"><span className={styles.__paginas}>Sign in</span></Link>
            {/*<img src={'https://cdn.icon-icons.com/icons2/494/PNG/512/alarm_icon-icons.com_48364.png'} className={styles.__imagenes} />*/}
            {/*<img src={'https://cdn.icon-icons.com/icons2/1558/PNG/512/353440-bubble-chat-dots-speech-talk_107494.png'} className={styles.__imagenes}/>*/}
            <Link to={'/perfilUser'}><img src={'https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-username_97587.png'} className={styles.__imagenes}/></Link>
        </nav>
    )
}

export default NavBar;