import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './contact_list';

export default () => {
    return (
        <div className="container">
            <h1 className="text-center">Address Book</h1>
            <ContactList />
        </div>
    )
}