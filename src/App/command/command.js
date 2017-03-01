import React, {Component} from 'react';

import Inputs from './inputs/inputs'
import command from './command.scss'
import keyinput from '../../Data/input'

class Command extends Component {
    render() {
        return (
            <div className='command'>
                <span className='user'>Zertu@<a href="http://zertu.space">zertu.space</a>
                </span>:~ $ &nbsp;
                <Inputs keyinput={keyinput}/>
            </div>
        );
    }
}

export default Command;