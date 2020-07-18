import React, {useState} from 'react';
import styles from './App.module.css';
import NavBar from "./components/navBar/navBar.view";
import Home from "./pages/home/home.view";
import PinForm from "./pages/pinForm/pinForm.view";
import BoardForm from "./pages/boardForm/boardForm.view";
import PerfilUser from "./pages/perfilUser/perfilUser.view";
import FormLogIn from "./pages/formSignIn/formLogIn.view";
import FormRegister from "./pages/formRegister/formRegister.view";

function App() {

    const [reloadToken, setReloadToken] = useState(false);

    return (
        <div>
            <NavBar/>

            <FormLogIn setReloadToken={setReloadToken} reloadToken={reloadToken}/>
            <FormRegister/>
            <PerfilUser setReloadToken={setReloadToken} reloadToken={reloadToken}/>

            <div className={styles.__forms__container}>
                <PinForm/>
                <BoardForm/>
            </div>

            <Home/>

        </div>
    );
}

export default App;
