import React, {useState, useEffect} from 'react';
import styles from './perfilUser.module.css';

const PerfilUser = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [user, setUser] = useState('');

    const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1OTQ5OTE4ODQsImV4cCI6MTU5NDk5NTQ4NCwibmJmIjoxNTk0OTkxODg0LCJqdGkiOiJxdTlzWWZGMmFrWXhQdlpHIiwic3ViIjo0LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.nKa5ODlEM5vKrixN63lLmcMqr71uUYffFy72j2H7d2o';

    useEffect(()=> {

        const url = 'http://localhost/api/auth/me';
        const options = {
            method: 'GET',
            headers: new Headers(
                {'Authorization': 'Bearer' + jwtToken}
            ),
            mode: 'cors'
        };

        fetch (url, options)
            .then(response => {
                if (response.status >= 200 || response < 300) {
                    return response.json();
                }
                return Promise.reject(response.status);
          })
            .then(payload => {
                setUser(payload);
            })

            .catch(error => console.log(error));
        }, []);

    return (
        <div className={styles.__contenedor}>

            <div className={styles.__foto__contenedor}>
                <img src={'https://s.pinimg.com/images/user/default_280.png'}className={styles.__foto__usuario}/>
            </div>

            <div className={styles.__usuarioNombre__contenedor}>
                <span className={styles.__usuario__nombre}>{user.first_name} {user.last_name}</span>
            </div>

            <div className={styles.__titulosBoards__contenedor}>
                <span className={styles.__tituloBoards}>Boards</span>
                {/*<span className={'titulo__boards'}>Pins</span>*/}
            </div>

        </div>
    )
}

export default PerfilUser;