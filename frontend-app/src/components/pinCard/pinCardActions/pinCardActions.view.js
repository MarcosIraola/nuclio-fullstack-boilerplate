import React from 'react';
import styles from './pinCardActions.module.css';

const PinCardAction = ({note}) =>{

    return(
        <div className={styles.__contenedor}>
            <div className={styles.__nombre}>{note}</div>
            <div className={styles.__save}>Save</div>
        </div>
    )
}

export default PinCardAction;