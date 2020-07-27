import React, {useState, useEffect} from 'react';
import styles from './perfilUser.module.css';
import {deleteToken, getTokenFromLocalStorage, isAuthenticated} from "../../utils/localStorage.utils";
import {Link} from "react-router-dom";
import {HOME, LANDING, PINBOARDFORM} from "../../routes/routes";
import NavBar from "../../components/navBar/navBar.view";
import ListBoard from "../../components/boards/listBoard/listBoard.view";
import {AuthContext} from "../../contexts/authentication/authentication.context";

const PerfilUser = ({setReloadToken, reloadToken}) => {

    const [user, setUser] = useState('');
    const [jwtToken, setJwtToken] = useState(getTokenFromLocalStorage());
    const { state, logout } = React.useContext(AuthContext);


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


    return (
        <div className={styles.__contenedor}>
            <NavBar/>

            <div className={styles.__foto__contenedor}>
                <img src={'https://s.pinimg.com/images/user/default_280.png'}className={styles.__foto__usuario}/>
            </div>

            <div className={styles.__usuarioNombre__contenedor}>
                <span className={styles.__usuario__nombre}>{user.first_name} {user.last_name}</span>
            </div>

            <div className={styles.__button__contenedor}>
                <input type={"button"} value={"Log out"} className={styles.__button__logOut} onClick={logout}/>
            </div>

            <div className={styles.__tituloBoards__contenedor}>
                <span className={styles.__tituloBoards}>Your borads</span>
                <ListBoard/>
            </div>

            <div className={styles.__contenedorButtonAgregar}>
                <Link to={PINBOARDFORM}><img src={'https://image.flaticon.com/icons/png/512/20/20183.png'} className={styles.__fav__button}/></Link>
                <img src={'https://image.flaticon.com/icons/png/512/36/36601.png'} className={styles.__fav__button}/>
            </div>

        </div>
    )
}

export default PerfilUser;