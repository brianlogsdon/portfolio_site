import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const Card = props => {
	return (
    <div className="col-5 mb-4 mx-auto ">
        <div className="card cardStyle permmarker">
            <img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
					width="320" height="250"
				/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                
                <a href={props.link} target="_blank" className="btn btn-secondary nav-link">{props.button}</a> 
            </div>
        </div>
    </div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string,
	image: PropTypes.string,
	link:PropTypes.string
};

export default Card;