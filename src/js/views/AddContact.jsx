import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class Contacts extends React.Component {
    render() {
        return (
            <div className="container">
                <Context.Consumer>{({ actions }) => {
						return (
    <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form>
            <div className="form-group">
                <label>Full Name</label>
                <input id="name" type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input id="email" type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input id="phone" type="phone" className="form-control" placeholder="Enter phone" />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input id="address" type="text" className="form-control" placeholder="Enter address" />
            </div>
           
                        
                        
            <button type="button" className="btn btn-primary form-control" onClick={() =>
												actions.addContact(
													document.querySelector("#name").value,
													document.querySelector("#email").value,document.querySelector("#phone").value,
													document.querySelector("#address").value,this.props
												)
											} >save</button>
            <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
        </form>
    </div>);
						}}
                </Context.Consumer>
            </div>
						
        );
    }
}