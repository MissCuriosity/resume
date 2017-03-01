import React, { Component } from 'react';

import Command from './command/command.js'
import app from './App.scss'

class App extends Component {
    render() {
        const time=new Date()
        return (
            <div className='app'>
                Welcome back!<br />
                Last Login: {time.toString()} on {navigator.platform}
                <Command />
            </div>
        );
    }
}

export default App;