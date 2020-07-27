import React, {useState} from 'react';
import styles from './pinCard.module.css';
import PinCardAction from "./pinCardActions/pinCardActions.view";

const PinCard = ({note, media_url}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.__contenedor}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img src={media_url} className={styles.__imagen}/>
            {isHovered && <PinCardAction note={note}/>}

        </div>
    )
}

export default PinCard;