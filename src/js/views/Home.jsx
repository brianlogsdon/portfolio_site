import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Card from "../components/card.jsx";
import Navbar from "../components/navbar.jsx";
import brianlogsdon from "../../img/brian_logsdon_tech.png";
import selfie from "../../img/selfie.jpg";
import broward from "../../img/browardHD2.gif";
import todo from "../../img/todo.gif";
import ecom from "../../img/ecom-gif.gif";
import cardpic from "../../img/cards.gif";
import instagram from "../../img/bootinsta.gif";
import traffic from "../../img/traffic.gif";
import timer from "../../img/timer2.gif";
import stocks from "../../img/stocks.gif";
import contacts from "../../img/contact.gif";


export default class Contacts extends React.Component {
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

                <div className="jumbotron jumbotron-fluid  mt-5 vh-50">
                    <div >
                        <div className="row">
                            <div className ="col-6 name-box text-center tracking-in-expand ">
                                
                                <h1 className="permmarker ">&lt;BrianLogsdon.tech /&gt;</h1>
                                <br />
                                <p className="lead permmarker"> Hello! My name is Brian Logsdon </p>
                                <p className="lead permmarker"> I am a Web Developer based in Fort Lauderdale, Florida </p>
                                <br />
                                <SocialIcon className="mx-1 " url="https://github.com/brianlogsdon" />
                                <SocialIcon className="mx-1 " url="https://www.linkedin.com/in/brian-logsdon-366131101/" />
                                <SocialIcon className="mx-1" url="https://twitter.com/BrianLogsdon9" />
                            </div>
                            <div className ="col-6 bounce-in-top">
                                <img className="img-fluid selfie center-block" src={selfie} alt="First slide"></img>
                            </div>
                            
                        </div>
                    </div>  
                </div>
                <div className="container-fluid mx-auto my-2">
                    
                    <h1 className="permmarker text-center">Portfolio</h1>
                    <div className="row ">
                        <Card
			
			title={"Broward Access"}
			text={"An application to assist the homeless population of Broward County find resources available to them. "}
			button={"View on Github"}
			image={broward}
			link={"https://github.com/brianlogsdon/broward-access"}
		/>
                        <Card
			
			title={"4Geeks Ecommerce Site"}
			text={"Collaborative ecommerce project built at 4Geeks academy"}
			button={"View on Github"}
			image={ecom}
			link={"https://github.com/jwalters221/collab-react-ecom"}
		/>
                        <Card
			
			title={"Stock Trading "}
			text={"Mock stock trading website. Built with Flask"}
			button={"View on Github"}
			image={stocks}
			link={"https://github.com/brianlogsdon/CS50-FInance"}
		/>
                        <Card
			
			title={"Contact Management App "}
			text={"Application to see, add, edit, and delete contacts. "}
			button={"View on Github"}
			image={contacts}
			link={"https://github.com/brianlogsdon/contact-management"}
		/>
                        <Card
			
			title={"Todo List"}
			text={"A todo list application built with React.js"}
			button={"View on Github"}
			image={todo}
			link={"https://github.com/brianlogsdon/todo-list"}
		/>
                        
                        <Card
			
			title={"Random Card Generator"}
			text={"Site that renders a new playing card on each reset"}
			button={"View on Github"}
			image={cardpic}
			link={"https://github.com/brianlogsdon/random-card-generator"}
		/>
                        <Card
			
			title={"Bootstrap Instagram Clone"}
			text={"Instagram clone built using bootstrap"}
			button={"View on Github"}
			image={instagram}
			link={"https://github.com/brianlogsdon/bootstrap-instagram"}
		/>
                        <Card
			
			title={"Traffic Light"}
			text={"Traffic light that lights as you click"}
			button={"View on Github"}
			image={traffic}
			link={"https://github.com/brianlogsdon/traffic-light"}
		/>
                        <Card
			
			title={"React Timer"}
			text={"Timer starting from last refresh. Made with React.js"}
			button={"View on Github"}
			image={timer}
			link={"https://github.com/brianlogsdon/traffic-light"}
		/>
                       
                    </div>     
                </div>
                
                
            </div>
        );
    }
}