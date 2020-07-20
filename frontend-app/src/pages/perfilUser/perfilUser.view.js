import React, {useState, useEffect} from 'react';
import styles from './perfilUser.module.css';
import {deleteToken, getTokenFromLocalStorage} from "../../utils/localStorage.utils";
import {Link} from "react-router-dom";

const PerfilUser = ({setReloadToken, reloadToken}) => {

    const [user, setUser] = useState('');
    const [jwtToken, setJwtToken] = useState(getTokenFromLocalStorage());

    useEffect(() => {
        const token = getTokenFromLocalStorage();
        setJwtToken(token);
    }, [reloadToken])

    useEffect(()=> {
        const url = 'http://localhost/api/auth/me';
        const options = {
            method: 'GET',
            headers: new Headers(
                {'authorization': 'Bearer' + jwtToken.token}
            ),
            mode: 'cors'
        };
        fetch (url, options)
            .then(response => {
                debugger;
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                return Promise.reject(response.status);
          })
            .then(payload => {
                setUser(payload);
            })

            .catch(error => setUser(''));
        }, [jwtToken]);

    const submitLogOut = () => {
        deleteToken();
        setReloadToken(!reloadToken);
        console.log('Log out succsesful')
    };

    return (
        <div className={styles.__contenedor}>

            <div className={styles.__foto__contenedor}>
                <img src={'https://s.pinimg.com/images/user/default_280.png'}className={styles.__foto__usuario}/>
            </div>

            <div className={styles.__usuarioNombre__contenedor}>
                <span className={styles.__usuario__nombre}>{user.first_name} {user.last_name}</span>
            </div>

            <div className={styles.__button__contenedor}>
                <input type={"button"} value={"Log out"} className={styles.__button__logOut} onClick={submitLogOut}/>
            </div>

            <div className={styles.__tituloBoards__contenedor}>
                <span className={styles.__tituloBoards}>Your borads</span>

                <div>
                    <div className={styles.__boards__contenedor}>
                        <div className={styles.__boards__contenedor__img01}>
                            <img src={'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'} className={styles.__boards__contenedor__img01}/>
                        </div>
                        <div>
                            <div className={styles.__boards__contenedor__img02}>
                                <img src={'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'} className={styles.__boards__contenedor__img02}/>
                            </div>
                            <div className={styles.__boards__contenedor__img03}>
                                <img src={'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'} className={styles.__boards__contenedor__img03}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.__contenedorButtonAgregar}>
                <Link to="/pinBoardForm"><img src={'https://image.flaticon.com/icons/png/512/20/20183.png'} className={styles.__fav__button}/></Link>
                <img src={'https://image.flaticon.com/icons/png/512/36/36601.png'} className={styles.__fav__button}/>
            </div>

        </div>
    )
}

export default PerfilUser;