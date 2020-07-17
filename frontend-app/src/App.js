import React from 'react';
import styles from './App.module.css';
import NavBar from "./components/navBar/navBar.view";
import Home from "./pages/home/home.view";
import PinForm from "./pages/pinForm/pinForm.view";
import BoardForm from "./pages/boardForm/boardForm.view";
import PerfilUser from "./pages/perfilUser/perfilUser.view";
import FormularioSignIn from "./pages/formularioSignIn/formularioSignIn.view";

function App() {

    return (
        <div>
            <NavBar/>
            <FormularioSignIn/>
            <PerfilUser/>

            <div className={styles.__forms__container}>
                <PinForm/>
                <BoardForm/>
            </div>

            <Home/>

        </div>
    );
}

export default App;
