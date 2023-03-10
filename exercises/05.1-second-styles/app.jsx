import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here
	background: "yellow",
	color: "black",
	border: "none",
};

const badgeStyles = {
	//write the span styles here
	background: "red",
	borderRadius: "50%",
	color: "white",
};

const Badge = (props) => {
	return (
		<button className="btn btn-primary" style={buttonStyles} type="button">
			{props.label}
			<span className="badge badge-light" style={badgeStyles}>
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
