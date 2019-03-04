import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Card from "../components/card.jsx";
import Navbar from "../components/navbar.jsx";
import { Document } from 'react-pdf';
//import { Document } from 'react-pdf/dist/entry.webpack';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
                <div>
                    <Document file="./Resume.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={window.console.error}/>
                </div>
                
            </div>
        );
    }
}