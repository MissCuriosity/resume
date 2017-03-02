import React, {Component} from 'react'

import input from '../../../Data/input';
import inputs from './inputs.scss'
import {observer} from "mobx-react"

@observer
class Inputs extends Component {
    constructor(props) {
        super(props)
    }
    handleChange(e){
        console.log(e)
    }
    // blink = span => {
    //     setInterval(function () {
    //         switch (span.className) {
    //             case 'blink':
    //                 span.className = 'command'
    //                 break
    //             case 'command':
    //                 span.className = 'blink'
    //                 break
    //         }
    //     }, 1000)
    // }
    render() {
        let reply =this.props.reply
        if(typeof(reply)=='string'&&reply.length){
           reply= reply.split('\n').join('<br />')
        }
        
        return (
            <div className='inputs'>
                <span className='user'>Zertu@<a href="http://zertu.space">zertu.space</a>
                </span>:{this.props.path} $ &nbsp;
                <span
                    className='command'>{this
                        .props
                        .keyinput
                        .join('')}</span>
            <i dangerouslySetInnerHTML={{__html:reply}}></i>
            </div>
        )
    }
}

export default Inputs