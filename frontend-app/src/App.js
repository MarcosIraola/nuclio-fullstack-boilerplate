import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import styles from './App.module.css';
import NavBar from "./utils/components/navBar/navBar.view";
import Home from "./utils/pages/home/home.view";
import PinForm from "./utils/components/pins/pinForm/pinForm.view";
import BoardForm from "./utils/components/boards/boardForm/boardForm.view";
import PerfilUser from "./utils/pages/perfilUser/perfilUser.view";
import FormLogIn from "./utils/pages/formLogIn/formLogIn.view";
import FormRegister from "./utils/pages/formRegister/formRegister.view";
import {HOME, SIGNIN, LOGIN, PERFILUSER, PINBOARDFORM, LANDING} from "./utils/routes/routes";
import Landing from "./utils/pages/landing/landing.view";
import {AuthContext, AuthContextProvider} from "./utils/contexts/authentication/authentication.context";
import NavbarSP from "./santaPera/components/navbar/navbarSP.view";
import PortadaSP from "./santaPera/components/portada/portada.view";
import ExpositoresSP from "./santaPera/components/expositores/expositoresSP.view";
import MapaSP from "./santaPera/components/mapa/mapaSP.view";
import Participa from "./santaPera/components/participa/participaSP.view";
import FooterSP from "./santaPera/components/footer/footerSP.view";


function App() {

    // const [reloadToken, setReloadToken] = useState(false);

    return (
        <Router>
            <div>
                <NavbarSP/>
                <PortadaSP/>
                <ExpositoresSP/>
                <MapaSP/>
                <Participa/>
                <FooterSP/>
            </div>
        </Router>

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

// <AuthContextProvider>
//     <Router>
//         <div>
//             <Switch>
//                 <Route exact path={LANDING}>
//                     <Landing/>
//                 </Route>
//                 <Route path={SIGNIN}>
//                     <FormRegister/>
//                 </Route>
//                 <Route path={LOGIN}>
//                     <FormLogIn/>
//                 </Route>
//                 <PrivateRoute path={HOME}>
//                     <Home/>
//                 </PrivateRoute>
//                 <PrivateRoute path={PERFILUSER}>
//                     <PerfilUser setReloadToken={setReloadToken} reloadToken={reloadToken}/>
//                 </PrivateRoute>
//                 <PrivateRoute path={PINBOARDFORM}>
//                     <div className={styles.__forms__container}>
//                         <NavBar/>
//                         <PinForm/>
//                         <BoardForm/>
//                     </div>
//                 </PrivateRoute>
//             </Switch>
//         </div>
//     </Router>
// </AuthContextProvider>