import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './stopwatch.js'

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Stopwatch</h1>
                <Stopwatch />
            </div>
        );
    }
}

export default App;

