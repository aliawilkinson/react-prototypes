import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }
    render() {
        return (
            <div>This is a text stopwatch</div>
        );
    }
}

export default Stopwatch;

