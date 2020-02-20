import React from "react";

export default function Greetings(props){
    return (
    <center>
    <h3> Name : {props.name} <br/>
    Age : {props.age} <br/>
    gender : {props.gender} </h3>
    </center>
);
}
