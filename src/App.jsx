import React from 'react';
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Pages/components/Logo/Logo';
import Navbar from './Pages/components/Navbar/Navbar';
import PageRouter from './PageRouter';
import './App.css';


function App(){
    
    return(
        <div>
            <HashRouter basename='/'>
                <div>
                    <Logo/>
                </div>
                    <Navbar/>
                <div className="rest">
                    <PageRouter/>
                </div>      
            </HashRouter>
        </div>
    )
}

export default App;