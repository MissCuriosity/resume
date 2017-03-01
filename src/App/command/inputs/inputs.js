import React, {Component} from 'react'

import inputs from './inputs.scss'
import {observer} from "mobx-react"

@observer
class Inputs extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.keyinput.finalinput)
        return (
            <div className='inputs'>
                <span>{this.props.keyinput.finalinput}</span>
            </div>
        )
    }
}

export default Inputs