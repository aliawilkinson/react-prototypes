import React, { Component } from 'react';
import Field from './field.js'


class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        const { form } = this.state;

        this.state[name] = value;
        console.log(this.state);

        this.setState({
            form: { ...form }
        });
    }

    handleSubmit() {
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form);
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="FirstName" type="text" value={firstName} onChange={this.handleInputChange} />
                <button>AddContact</button>
            </form>
        )
    }
}

export default ContactForm;

/* //     
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
            //         <label>
            //             First Name
            //         </label>
            //         <input onChange={this.handleInputChange} value={firstName} name="firstName" type="text" className="form-control" />
            //     </div>
            //     <div className="form-group">
            //         <label>
            //             Last Name
            //         </label>
            //         <input onChange={this.handleInputChange} value={lastName} name="lastName" type="text" className="form-control" />
            //     </div>
            // </form> */