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
import FormLogIn from "./pages/formLogIn/formLogIn.view";
import FormRegister from "./pages/formRegister/formRegister.view";
import {HOME, SIGNIN, LOGIN, PERFILUSER, PINBOARDFORM} from "./routes/routes";


function App() {

    const [reloadToken, setReloadToken] = useState(false);

    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path={HOME}>
                        <Home/>
                    </Route>
                    <Route path={SIGNIN}>
                        <FormRegister/>
                    </Route>
                    <Route path={LOGIN}>
                        <FormLogIn setReloadToken={setReloadToken} reloadToken={reloadToken}/>
                    </Route>
                    <Route path={PERFILUSER}>
                        <PerfilUser setReloadToken={setReloadToken} reloadToken={reloadToken}/>
                    </Route>
                    <Route path={PINBOARDFORM}>
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
