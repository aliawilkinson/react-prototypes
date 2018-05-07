import React from 'react';
import { NavLink } from 'react-router-dom';
import '../nav.css';

const Nav = () => {
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink activeClassName="active selected" exact to="/" className="nav-link">Welcome</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active selected" to="/our-macaroons" className="nav-link">Our Macaroons</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active selected" to="/gifts-and-parties" className="nav-link">Gifts and Parties</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active selected" to="/contact" className="nav-link">Contact</NavLink>
            </li>
        </ul>
    );
}

export default Nav;