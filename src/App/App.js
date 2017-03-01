import React, { Component } from 'react';

import Command from './command/command.js'
import app from './App.scss'

class App extends Component {
    render() {
        return (
            <div className='app'>
                Welcome back!<br />
                Last Login: Wed Mar 01 2017 12:52:36 GMT+0800 (中国标准时间) on ttys000
                <Command />
            </div>
        );
    }
}

export default App;