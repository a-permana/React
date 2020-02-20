import React, { Component } from 'react';

class profile extends React.Component {
    render = () => (
        // <div className="container mt-2">
        <div>
            <center>
            <img src ="avatar.png" class="mx-auto d-block" alt="avatar" width="300"></img>
            <h4>Name : Alek Peremana <br/>
                Gender : Male <br/>
                Age : 26
            </h4>
            </center>
        </div>
        );
    }
    export default profile;