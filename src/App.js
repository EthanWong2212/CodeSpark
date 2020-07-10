import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Pages/components/Logo/Logo';
import Navbar from './Pages/components/Navbar/Navbar';
import PageRouter from './PageRouter'


function App(){
    
    return(
        <div>
            <Router>
                <div>
                    <Logo/>
                </div>
                    
                    <Navbar/>
                    <PageRouter/>
            </Router>
        </div>
    )
}

export default App;