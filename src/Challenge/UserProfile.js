import React, { Component } from 'react';
import Bio from './bio';
import Avatar from './avatar';
import Name from './name';
export default class UserProfile extends Component {
    render() {
        return(
        <div>
            <Avatar/>
            <Name/>
            <Bio/>
        </div>
        )
    }
}