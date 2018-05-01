import React, { Component } from 'react';


class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)

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
        console.log('handleSubmit called, form values are:', this.state.form);
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <form name="form">
                <div className="form-group">
                    <label>
                        First Name
                    </label>
                    <input onChange={this.handleInputChange} value={firstName} name="firstName" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>
                        Last Name
                    </label>
                    <input onChange={this.handleInputChange} value={lastName} name="lastName" type="text" className="form-control" />
                </div>
            </form>
        )
    }
}

export default ContactForm;