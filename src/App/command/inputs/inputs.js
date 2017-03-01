import React, {Component} from 'react'

import inputs from './inputs.scss'
import {observer} from "mobx-react"

@observer
class Inputs extends Component {
    constructor(props) {
        super(props)
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
        return (
            <div className='inputs'>
                <span className='user'>Zertu@<a href="http://zertu.space">zertu.space</a>
                </span>:~ $ &nbsp;
                <span
                    className='command'>{this
                        .props
                        .keyinput
                        .join('')}</span>
            </div>
        )
    }
}

export default Inputs