import React from "react";
import { Link } from "react-router-dom";

import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";


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
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Life</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Blog</a>
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