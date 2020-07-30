import React, {useState} from 'react';
import styles from './pinCard.module.css';
import PinCardAction from "./pinCardActions/pinCardActions.view";

const PinCard = ({note, mediaUrl}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.__contenedor}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img src={mediaUrl} className={styles.__imagen} alt='Error'/>
            {isHovered && <PinCardAction note={note}/>}

        </div>
    )
}

export default PinCard;