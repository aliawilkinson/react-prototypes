import React, { Component } from 'react';
import axios from 'axios';

class Movies extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { info } = this.props
        return (
            <div>
                <img src={info['im:image'][2].label} />
                <h3>{info['im:name'].label}</h3>
                <p>{info.summary.label}</p>
            </div>
        );
    }
}
export default Movies;