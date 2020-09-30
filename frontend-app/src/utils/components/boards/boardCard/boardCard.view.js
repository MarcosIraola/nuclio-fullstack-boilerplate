import React from 'react';
import styles from './boardCard.module.css';

const BoardCard = () => {

    return(
        <div className={styles.__tituloBoards__contenedor}>
            <div>
                <div className={styles.__boards__contenedor}>
                    <div className={styles.__boards__contenedor__img01}>
                        <img src='https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' className={styles.__boards__contenedor__img01} alt="error"/>
                    </div>
                    <div>
                        <div className={styles.__boards__contenedor__img02}>
                            <img src='https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' className={styles.__boards__contenedor__img02} alt="error"/>
                        </div>
                        <div className={styles.__boards__contenedor__img03}>
                            <img src='https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' className={styles.__boards__contenedor__img03} alt="error"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardCard;