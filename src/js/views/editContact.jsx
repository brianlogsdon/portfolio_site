import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";



export default class Contacts extends React.Component {
    
    render() {
        
        return (
            
            <Context.Consumer>
                {({ store,actions }) => {
                
                return (
                    <div className="container">
            
                        <div>
                            <h1 className="text-center mt-5">Edit contact</h1>
                            <form>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input id="name" type="text" className="form-control" defaultValue={store.contacts[
												this.props.match.params.id
											].full_name}  />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input id="email" type="email" className="form-control" defaultValue={store.contacts[
												this.props.match.params.id
											].email} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input id="phone" type="phone" className="form-control" defaultValue={store.contacts[
												this.props.match.params.id
											].phone} />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input id="address" type="text" className="form-control" defaultValue={store.contacts[
												this.props.match.params.id
											].address} />
                                </div>
                                
                                <button type="button"onClick={() =>{actions.updateElement(
												store.contacts[this.props.match.params.id].id
											,document.querySelector("#name").value,
													document.querySelector("#email").value,document.querySelector("#phone").value,
													document.querySelector("#address").value,this.props);
                                }} className="btn btn-primary form-control">save</button>
                                <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                            </form>
                        </div>
                    </div>
                    );
					}}
            </Context.Consumer>
        );
    }
    
}
Contacts.propTypes = {
    match: PropTypes.object
    
};