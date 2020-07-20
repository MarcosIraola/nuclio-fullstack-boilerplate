import React, {useState} from 'react';
import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from "./components/navBar/navBar.view";
import Home from "./pages/home/home.view";
import PinForm from "./components/pinForm/pinForm.view";
import BoardForm from "./components/boardForm/boardForm.view";
import PerfilUser from "./pages/perfilUser/perfilUser.view";
import FormLogIn from "./pages/formSignIn/formLogIn.view";
import FormRegister from "./pages/formRegister/formRegister.view";

function App() {

    const [reloadToken, setReloadToken] = useState(false);

    return (
        <Router>
            <div>
                <NavBar/>

                <Switch>

                    <Route path="/home">
                        <Home/>
                    </Route>

                    <Route path="/signin">
                        <FormRegister/>
                    </Route>

                    <Route path="/login">
                        <FormLogIn setReloadToken={setReloadToken} reloadToken={reloadToken}/>
                    </Route>

                    <Route path="/perfilUser">
                        <PerfilUser setReloadToken={setReloadToken} reloadToken={reloadToken}/>
                    </Route>

                    <Route path="/pinBoardForm">
                        <div className={styles.__forms__container}>
                            <PinForm/>
                            <BoardForm/>
                        </div>
                    </Route>

                </Switch>

            </div>
        </Router>
    );
}

export default App;
