import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Navbar_style.css";

class Navbar extends Component {
    render() { 
        return ( 
            <div>
                <ul className="navbar">
                    <Link to ="/">
                        <li><a>Home</a></li>
                    </Link>
                    <Link to ="/curriculum">
                        <li> <a>Curriculum</a></li>
                    </Link>
                    <Link to="/overview">
                        <li><a>Overview</a></li>
                    </Link>
                    <Link to="/about">
                        <li><a>About</a></li>
                    </Link>

                </ul>
            </div>
         );
    }
}
 
export default Navbar;