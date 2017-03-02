import React, {Component} from 'react';

import Inputs from './inputs/inputs'
import command from './command.scss'
import handleInput from '../../Handler/Handler';
import keyinput from '../../Data/input'
import {observer} from "mobx-react"

@observer
class Command extends Component {
    componentDidMount() {
        keyinput
            .pre('h')
            .then(() => keyinput.pre('e'))
            .then(() => keyinput.pre('l'))
            .then(() => keyinput.pre('p'))
            .then(()=>{
                setTimeout(function() {                    
                keyinput.lists[0].reply=handleInput('help')
                keyinput.i++
                keyinput.lists
                        .push({key: keyinput.i, inputkeys: [], path: '~'})
                }, 300);
            })
    }
    render() {
        const lists = keyinput
            .lists
            .map(item => <Inputs
                key={item.key}
                path={item.path}
                keyinput={item.inputkeys}
                reply={item.reply}/>)
        return (
            <div className='command'>
                {lists}
            </div>
        );
    }
}

export default Command;