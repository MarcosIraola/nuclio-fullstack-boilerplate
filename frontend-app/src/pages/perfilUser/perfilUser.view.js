import React from 'react';
import styles from './perfilUser.module.css';
import {Link} from "react-router-dom";
import { PINBOARDFORM } from "../../routes/routes";
import NavBar from "../../components/navBar/navBar.view";
import ListBoard from "../../components/boards/listBoard/listBoard.view";
import {AuthContext} from "../../contexts/authentication/authentication.context";

const PerfilUser = () => {

    const { state, logout } = React.useContext(AuthContext);
    const imgPerfil = 'https://s.pinimg.com/images/user/default_280.png';
    const imgUser = state.user.avatar_url2;

    return (
        <div className={styles.__contenedor}>
            <NavBar/>

            <div className={styles.__foto__contenedor}>
                <img src={imgPerfil} className={styles.__foto__usuario} alt={'Error'}/>
            </div>

            <div className={styles.__usuarioNombre__contenedor}>
                <span className={styles.__usuario__nombre}>{state.user.first_name} {state.user.last_name}</span>
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
                <img src={'https://image.flaticon.com/icons/png/512/36/36601.png'} className={styles.__fav__button} alt={'Error'}/>
            </div>

        </div>
    )
}

export default PerfilUser;