import React from 'react';
import ReactDOM from 'react-dom';

class User {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return (<div className="container">
            <h1>Hello {this.name}</h1>
            <h2 className="text-muted">Your lucky number is {this.luckyNumber()}</h2>
        </div>)
    }
    luckyNumber() {
        return Math.floor(Math.random() * 1000) + 1
    }
}

const Harrison = new User('Harrison');

ReactDOM.render(
    Harrison.greeting(),
    document.getElementById('root')
);
