import React, {useState} from 'react';
import styles from './formularioSignIn.module.css';

const FormularioSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jwtToken, setJwtToken] = useState('');

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
                    setJwtToken(payload.access_token);
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.__contenedor}>

            <div className={styles.__logo__contenedor}>
                <img src={'https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png'} className={styles.__logo}/>
            </div>

            <h1 className={styles.__h1}>Welcome to Pinterest!</h1>

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
    );
}

export default FormularioSignIn;