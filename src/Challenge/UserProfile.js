import React, { Component } from 'react';
import Bio from './bio';
import Avatar from './avatar';
import Username from './username';
export default class UserProfile extends Component {
    render() {
        return(
        <div>
            <Avatar/>
            <Username/>
            <Bio/>
        </div>
        )
    }
}