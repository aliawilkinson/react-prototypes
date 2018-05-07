import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacaroons from './our-macaroons';
import GiftsParties from './gifts_parties';
import Contact from './contact';

const App = () => {
    return (
        <div>
            <Nav />
            <Route exact path="/" component={Welcome} />
            <Route path="/our-macaroons" component={OurMacaroons} />
            <Route path="/gifts-and-parties" component={GiftsParties} />
            <Route path="/contact" component={Contact} />
        </div>
    )
};

export default App;

