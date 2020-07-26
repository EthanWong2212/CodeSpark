import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Navbar_style.css";

class Navbar extends Component {
    render() { 
        return ( 
            <div>
                <ul className="navbar">
                    {/* <Link to ="/"> */}
                        <li><Link to ="/"><a>Home</a></Link></li>
                    {/* </Link> */}
                    {/* <Link to ="/curriculum"> */}
                        <li> <Link to ="/curriculum"><a>Curriculum</a></Link></li>
                    {/* </Link> */}
                    {/* <Link to="/overview"> */}
                        <li><Link to="/overview"><a>Overview</a></Link></li>
                    {/* </Link> */}
                    {/* <Link to="/about"> */}
                        <li><Link to="/about"><a>About</a></Link></li>
                    {/* </Link> */}

                </ul>
            </div>
         );
    }
}
 
export default Navbar;