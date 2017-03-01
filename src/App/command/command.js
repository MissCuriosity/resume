import React, {Component} from 'react';

import Inputs from './inputs/inputs'
import command from './command.scss'
import keyinput from '../../Data/input'
import {observer} from "mobx-react"

@observer
class Command extends Component {
    render() {
        const lists = keyinput.lists.map(item=>
            <Inputs key={item.key} keyinput={item.inputkeys}/>               
        )
        return (
            <div className='command'>
                {lists}
            </div>
        );
    }
}

export default Command;