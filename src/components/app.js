import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './contact_list.js';
import ContactForm from './contact_form.js'
import contactData from '../data/contacts.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: contactData
        }
        this.addContact = this.addContact.bind(this)
    }
    addContact(contact) {
        this.setState = ({
            contacts: [contact, ...this.state.contacts]
        });
    }
    render() {
        return (
            <div className="container" >
                <h1 className="text-center">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm />
                    </div>
                    <ContactList contacts={this.state.contacts} add={this.addContact} />
                </div>
            </div>
        )
    }
}

export default App;