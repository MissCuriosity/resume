import React, { Component } from 'react';

import command from './command.scss'

class Command extends Component {
    render() {
        return (
            <div className='command'>
               <span>Zertu@<a href="http://zertu.space">zertu.space</a> </span>:~ $
            </div>
        );
    }
}

export default Command;