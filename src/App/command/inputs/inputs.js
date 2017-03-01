import React, {Component} from 'react'

import inputs from './inputs.scss'
import {observer} from "mobx-react"

@observer
class Inputs extends Component {
    constructor(props){
        super(props)
    }
    handlekeyup=e=>{
        console.log(e)
    }
    render() {
        return (
            <div className='inputs'>
                <span className='user'>Zertu@<a href="http://zertu.space">zertu.space</a>
                </span>:~ $ &nbsp;
                <span>{this.props.keyinput.join('')}</span>
            </div>
        )
    }
}

export default Inputs