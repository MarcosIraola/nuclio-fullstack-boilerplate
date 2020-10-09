import React, {useEffect, useState} from 'react';
import styles from './listBoard.module.css';
import BoardCard from "../boardCard/boardCard.view";
import {AuthContext} from "../../../contexts/authentication/authentication.context";

const ListBoard = () => {

    const [boards, setBoards] = useState('');
    const { state } = React.useContext(AuthContext);

    useEffect(() => {
        const url = 'http://localhost/api/boards/user/'+ state.user.id

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
                }
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={styles.__contenedor}>
            {boards && boards.map(board => {
                return (
                    <BoardCard
                        key={board.id}
                    />
                );
            })}

        </div>
    );
};

export default ListBoard;