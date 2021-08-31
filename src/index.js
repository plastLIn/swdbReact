import React from "react";
import ReactDOM from "react-dom"
import App from "./components/app/app";

ReactDOM.render(<App />, document.getElementById('root'));

//netService.getAllPeople().then((data)=>{
//    data.results.forEach((d) => console.log(d.name));