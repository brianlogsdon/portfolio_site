import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Card from "../components/card.jsx";
import Navbar from "../components/navbar.jsx";

import pdf from "../../img/Resume.pdf";




export default class Resume extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal: false,
            modalId:''
        };
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="my-1">
                    <Navbar />
                </div>
                <div className="mt-5 vh-80">
                    <embed src={pdf} type="application/pdf" width="100%" height="700px" />
                </div>
                
            </div>
        );
    }
}