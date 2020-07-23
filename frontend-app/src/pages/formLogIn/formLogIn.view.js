import React, {useState} from 'react';
import styles from './formLogIn.module.css';
import {setJWTInLocalStorage} from "../../utils/localStorage.utils";
import { useHistory } from "react-router-dom";
import {HOME, PERFILUSER} from "../../routes/routes";

const FormLogIn = ({setReloadToken, reloadToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submitLogIn = () => {
        const url = 'http://localhost/api/auth/login';
        const body = {
            email: email,
            password: password,
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };
        fetch(url,options)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                    console.log("Log in successful.");
                    setJWTInLocalStorage(payload.access_token);
                    setReloadToken(!reloadToken);
                    history.push(HOME);
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className={styles.__contenedorForm}>
                <div className={styles.__logo__contenedor}>
                    <img src={'https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png'} className={styles.__logo}/>
                </div>

                <h1 className={styles.__h1}>Log in to Pinterest!</h1>

                <label htmlFor="email-form" className={styles.__form__titulo}>Email</label>
                <input id="email-form" type={"text"} value={email} className={styles.__form__relleno} placeholder={'Email'} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password-form" className={styles.__form__titulo}>Password</label>
                <input id="password-form" type={"password"} value={password} className={styles.__form__relleno} placeholder={'Write your password'} onChange={e => setPassword(e.target.value)}/>

                <div className={styles.__button__contenedor}>
                    <input type={"button"} value={"Log In"} className={styles.__form__signIn} onClick={submitLogIn}/>
                </div>

                <div className={styles.__forgotPassword__contenedor}>
                    <input type={"button"} value={"Forgot password?"} className={styles.__forgotPassword}/>
                </div>
            </div>
            <img className={styles.__imgBackgroundHome} src={'https://store-images.s-microsoft.com/image/apps.18327.14204669951057618.66f35ee3-03b9-46a6-b185-b9ce0ffda2f4.2f04a50a-ae96-4ed4-a762-3b3e097eb58f?mode=scale&q=90&h=720&w=1280'}/>
        </div>

    );
}

export default FormLogIn;