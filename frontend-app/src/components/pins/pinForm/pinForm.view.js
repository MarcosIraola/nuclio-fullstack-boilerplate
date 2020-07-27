import React, {useState, useEffect} from 'react';
import styles from './pinForm.module.css';
import Modal from "../../modal/modal.view";

const PinForm = () => {
    const [note, setNote] = useState('');
    const [mediaUrl, setMediaUrl] = useState('');
    const [boardId, setBoardId] = useState('');
    const [boards, setBoards] = useState([]);

    const submitPinForm = () => {
        const url = "http://localhost/api/pins";
        const body = {
            note: note,
            media_url: mediaUrl,
            board_id: boardId,
        };
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };
        fetch(url, options)
            .then(response => {
                    if (response.status === 201) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then(payload => {
                    console.log("Pin saved.");
                }
            )
            .catch(error => console.log(error));
    }

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
                }
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={styles.__contenedor}>
            <h1 className={styles.__h1}>Create a Pin!</h1>
            <label htmlFor="note-form" className={styles.__form__titulo}>Title</label>
            <input id="note-form" type={"text"} value={note} className={styles.__form__relleno} placeholder={'Add your pin title '} onChange={e => setNote(e.target.value)} />

            <label htmlFor="media-form" className={styles.__form__titulo}>Media url</label>
            <input id="media-form" type={"text"} className={styles.__form__relleno} value={mediaUrl} placeholder={'Write or paste the URL of your image'} onChange={e => setMediaUrl(e.target.value)}/>

            <label className={styles.__form__titulo}>Choose a board!</label>
            <select value={boardId} className={styles.__form__selectBoard} onChange={(e) => setBoardId(e.target.value)} >
                {
                    boards.map((board) => {
                        return (<option key={'board-select' + board.id} value={board.id}>{board.name}</option>)
                    })
                }
            </select>

            <div className={styles.__button__contenedor}>
                <input type={"button"} value={"Submit"} className={styles.__form__submit} onClick={submitPinForm} />
            </div>

        </div>
    );
}

export default PinForm;