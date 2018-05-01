import React, { Component } from 'react';
import contactData from '../data/contacts.js';
import ContactCard from './contact_card';

class ContactList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: contactData
        };
        // console.log(this.state.contacts)
        this.list = this.state.contacts.map((item, index) => {
            return <ContactCard key={index} contact={item} />
        });
    }

    render() {
        const list = this.props.contacts.map((item, index) => {
            return <ContactCard key={index} contact={item} />
        });
        // console.log('Contact Data', this.state.contacts);
        return (
            <div className="col-8" >
                <div className="row">
                    {this.list}
                </div>
            </div>
        )
    };
}

export default ContactList;