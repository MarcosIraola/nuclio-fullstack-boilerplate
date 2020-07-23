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
import {HOME, SIGNIN, LOGIN, PERFILUSER, PINBOARDFORM, LANDING} from "./routes/routes";
import Landing from "./pages/landing/landing.view";


function App() {

    const [reloadToken, setReloadToken] = useState(false);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={LANDING}>
                        <Landing />
                    </Route>
                    <Route path={HOME}>
                        <Home />
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
                            <NavBar/>
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
