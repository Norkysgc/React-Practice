import React from "react";
import ReactDOM from "react-dom";

// if we have a variable
let age = "12";
let name = "John";

// we can use it in our html like this
let output = <span><h1>My name is {name}</h1><br/><h2>I´m {age} years old</h2></span>

// use react-dom to render it
ReactDOM.render(output, document.querySelector("#myDiv"));
