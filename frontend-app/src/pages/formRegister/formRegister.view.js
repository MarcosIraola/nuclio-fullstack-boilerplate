import React, {useState} from 'react';
import styles from './formRegister.module.css';
import {Link, useHistory} from "react-router-dom";
import {LANDING, LOGIN} from "../../routes/routes";

const FormRegister = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const history = useHistory();

    const SubmitNewUser = () => {
        const url = "http://localhost/api/users";
        const body = {
            email: email,
            password: password,
            username: username,
            first_name: firstName,
            last_name: lastName,
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
                    console.log("New user", payload);
                    history.push(LOGIN);
                    alert("Welcome! Please log in now.");
                }
            )
            .catch(error => console.log(error));

    }

    return (
        <div>
            <div className={styles.__contenedor}>
                <div className={styles.__logo__contenedor}>
                    <img src={'https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png'} className={styles.__logo}/>
                </div>

                <Link to={LANDING}>
                    <img className={styles.__closeImg} src={'https://image.flaticon.com/icons/svg/1828/1828778.svg'}/>
                </Link>

                <h1 className={styles.__h1}>Welcome to Pinterest!</h1>

                <label htmlFor="email-submit-form" className={styles.__form__titulo}>Email</label>
                <input id="email-submit-form" type={"text"} value={email} className={styles.__form__relleno} placeholder={'Write your email'} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password-submit-form" className={styles.__form__titulo}>Password</label>
                <input id="password-submit-form" type={"password"} value={password} className={styles.__form__relleno} placeholder={'Write your password'} onChange={e => setPassword(e.target.value)}/>

                <label htmlFor="username-form" className={styles.__form__titulo}>Username</label>
                <input id="username-submit-form" type={"text"} value={username} className={styles.__form__relleno} placeholder={'Choose a username'} onChange={e => setUsername(e.target.value)} />

                <label htmlFor="firstName-submit-form" className={styles.__form__titulo}>First name</label>
                <input id="firstName-form" type={"text"} value={firstName} className={styles.__form__relleno} placeholder={'Write your first name'} onChange={e => setFirstName(e.target.value)} />

                <label htmlFor="lastName-submit-form" className={styles.__form__titulo}>Last name</label>
                <input id="lastName-submit-form" type={"text"} value={lastName} className={styles.__form__relleno} placeholder={'Write your last name'} onChange={e => setLastName(e.target.value)} />

                <div className={styles.__button__contenedor}>
                    <input type={"button"} value={"Register"} className={styles.__form__register} onClick={SubmitNewUser}/>
                </div>
            </div>
            <Link className={styles.__link} to={LANDING}>
                <img className={styles.__imgBackgroundHome} src={'https://store-images.s-microsoft.com/image/apps.18327.14204669951057618.66f35ee3-03b9-46a6-b185-b9ce0ffda2f4.2f04a50a-ae96-4ed4-a762-3b3e097eb58f?mode=scale&q=90&h=720&w=1280'}/>
            </Link>
        </div>
    );
}

export default FormRegister;