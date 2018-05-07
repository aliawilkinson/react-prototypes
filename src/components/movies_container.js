import React, { Component } from 'react';
import axios from 'axios';
import Movies from './movie';

class MoviesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount() {
        const itunesAPI_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(itunesAPI_URL).then((response) => {
            console.log("Response: ", response);
            this.setState({
                movies: response.data.feed.entry
            })
        });
    }

    render() {
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movies info={movieInfo} key={index} />;
        });
        console.log(this.state)
        return (
            <div className="Container">
                {movieList}
            </div>);
    }
}

export default MoviesContainer;