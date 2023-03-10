import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const Alert = props => {
	//your component here
	const colorClasses = {
		'red': 'alert-danger',
		'orange': 'alert-warning'
	}
	if (props.color === 'red') {
		return (<div className="alert alert-danger" role="alert">
		OMG! Something really bad has happended!
	  </div>)
		;
	} else {
		// retorna aquí el componente html
		return (
			<div className="alert alert-warning" role="alert">
			Well, it is not that bad after all!
		  </div>
		);
	}
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	class: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);
