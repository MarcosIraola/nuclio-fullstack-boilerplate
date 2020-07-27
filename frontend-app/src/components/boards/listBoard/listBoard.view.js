import React, {useEffect, useState} from 'react';
import styles from './listBoard.module.css';
import PinCard from "../../pins/pinCard/pinCard.view";
import BoardCard from "../boardCard/boardCard.view";

const ListBoard = () => {

    const [boards, setBoards] = useState('');

    useEffect(() => {
        const url = 'http://localhost/api/boards/user/'+4

        const options = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
        };
        fetch(url, options)
            .then(response => {
                    if (response.status >= 200 || response.status < 300) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then(payload => {
                    setBoards(payload);
                    console.log('Boards del auth cargados a useState');
                }
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={styles.__contenedor}>
            {boards && boards.map(board => {
                return (
                    <BoardCard/>
                );
            })}

        </div>
    );
};

export default ListBoard;