import React, {useState} from 'react';
import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import NavBar from "./components/navBar/navBar.view";
import Home from "./pages/home/home.view";
import PinForm from "./components/pins/pinForm/pinForm.view";
import BoardForm from "./components/boards/boardForm/boardForm.view";
import PerfilUser from "./pages/perfilUser/perfilUser.view";
import FormLogIn from "./pages/formLogIn/formLogIn.view";
import FormRegister from "./pages/formRegister/formRegister.view";
import {HOME, SIGNIN, LOGIN, PERFILUSER, PINBOARDFORM, LANDING} from "./routes/routes";
import Landing from "./pages/landing/landing.view";
import {AuthContext, AuthContextProvider} from "./contexts/authentication/authentication.context";
import BoardCard from "./components/boards/boardCard/boardCard.view";


function App() {

    const [reloadToken, setReloadToken] = useState(false);

    return (
        <AuthContextProvider>
            <Router>
                <div>
                    <Switch>
                        <Route exact path={LANDING}>
                            <Landing/>
                        </Route>
                        <Route path={SIGNIN}>
                            <FormRegister/>
                        </Route>
                        <Route path={LOGIN}>
                            <FormLogIn setReloadToken={setReloadToken} reloadToken={reloadToken}/>
                        </Route>
                        <PrivateRoute path={HOME}>
                            <Home/>
                        </PrivateRoute>
                        <PrivateRoute path={PERFILUSER}>
                            <PerfilUser setReloadToken={setReloadToken} reloadToken={reloadToken}/>
                        </PrivateRoute>
                        <PrivateRoute path={PINBOARDFORM}>
                            <div className={styles.__forms__container}>
                                <NavBar/>
                                <PinForm/>
                                <BoardForm/>
                            </div>
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </AuthContextProvider>
    );
}

function PrivateRoute(props) {
    const {state} = React.useContext(AuthContext);
    const {children, path} = props;
    return (
        <Route path={path}>
            {state.isAuthenticated ? (children) : <Redirect to={{pathname: LOGIN}}/>}
        </Route>
    );
}

export default App;
