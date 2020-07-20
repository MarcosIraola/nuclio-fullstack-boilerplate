import React, {useState} from 'react';
import styles from './boardForm.module.css';

const BoardForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [user_id, setUserId] = useState('');

    const submitBoardForm = () => {

        const url = "http://localhost/api/boards";
        const body = {
            name: name,
            description: description,
            user_id: 1,
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
                    console.log("Board", payload);
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.__contenedor}>

            <h1 className={styles.__h1}>Create a Board!</h1>

            <label htmlFor="title-form" className={styles.__form__titulo}>Title</label>
            <input id="title-form" type={"text"} value={name} className={styles.__form__relleno} placeholder={'Name your board'} onChange={e => setName(e.target.value)} />

            <label htmlFor="description-form" className={styles.__form__titulo}>Description</label>
            <input id="description-form" type={"textarea"} className={styles.__form__relleno} value={description} placeholder={'Tell us about your board'} onChange={e => setDescription(e.target.value)}/>

            <label htmlFor={'user-form'} className={styles.__form__titulo}>User Id</label>
            <input id={'user-form'} type={'text'} value={1} className={styles.__form__relleno}/>

            <div className={styles.__button__contenedor}>
                <input type={"button"} value={"Submit"} className={styles.__form__submit} onClick={submitBoardForm} />
            </div>

        </div>
    )
}

export default BoardForm;