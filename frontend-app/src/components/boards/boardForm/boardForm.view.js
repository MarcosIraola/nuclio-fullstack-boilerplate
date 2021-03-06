import React, {useState} from 'react';
import styles from './boardForm.module.css';
import {getTokenFromLocalStorage} from "../../../utils/localStorage.utils";

const BoardForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const submitBoardForm = () => {

        const url = "http://localhost/api/boards";
        const body = {
            name: name,
            description: description,
        };
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',
                'authorization': 'Bearer' + getTokenFromLocalStorage().token
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
                    console.log("Board", payload);
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.__contenedor}>

            <h1 className={styles.__h1}>Create a Board!</h1>

            <label htmlFor="title-form" className={styles.__form__titulo}>Title
                <input id="title-form" type="text" value={name} className={styles.__form__relleno} placeholder='Name your board' onChange={e => setName(e.target.value)} />
            </label>

            <label htmlFor="description-form" className={styles.__form__titulo}>Description
                <input id="description-form" type="textarea" className={styles.__form__relleno} value={description} placeholder='Tell us about your board' onChange={e => setDescription(e.target.value)}/>
            </label>

            <label htmlFor='user-form' className={styles.__form__titulo}>User Id
                <input id='user-form' type='text' value='asd' className={styles.__form__relleno}/>
            </label>

            <div className={styles.__button__contenedor}>
                <input type="button" value="Submit" className={styles.__form__submit} onClick={submitBoardForm} />
            </div>

        </div>
    )
}

export default BoardForm;