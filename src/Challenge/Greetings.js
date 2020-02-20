import React from "react";

export default function Greetings(props){
    return (
    <center>
    <h4> Name : {props.name} <br/>
    Age : {props.age} <br/>
    gender : {props.gender} </h4>
    </center>
);
}
