import React from "react";
import { Link } from "react-router-dom";

import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";
import logo from '../../img/brand.png';

//create your first component
const Navbar = () => {
	return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light permmarker">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
								Home
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/resume">
								Resume
                        </Link>
                    </li>
                    
                    
                </ul>
            </div>
        </nav>
    </div>
	);
};


Navbar.propTypes = {
    history: PropTypes.object
    
};
export default withRouter(Navbar);