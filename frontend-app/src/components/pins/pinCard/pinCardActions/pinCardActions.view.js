import React from 'react';
import styles from './pinCardActions.module.css';
import { useHistory } from "react-router-dom";
import {isAuthenticated} from "../../../../utils/localStorage.utils";
import {LOGIN, PINBOARDFORM} from "../../../../routes/routes";

const PinCardAction = ({note}) =>{

    const history = useHistory();

    const Redirigir = () => {
        isAuthenticated() ? history.push(PINBOARDFORM) : history.push(LOGIN)
    }

    return(
        <div className={styles.__contenedor}>
            <div className={styles.__nombre}>{note}</div>
            <div className={styles.__save} onClick={Redirigir}>Save</div>
        </div>
    )
}

export default PinCardAction;