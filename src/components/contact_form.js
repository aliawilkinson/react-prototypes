import React, { Component } from 'react';
import Field from './field.js'


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event) {
        const { name, value } = event.target;
        console.log('NAME: %s- VALUE: %s', name, value);
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state);
        this.props.add(this.state);
    }

    render() {
        const { firstName, lastName, phone, email } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Field name="firstName" label="FirstName" type="text" value={firstName} onChange={this.handleInputChange} />
                    <Field name="lastName" label="LastName" type="text" value={lastName} onChange={this.handleInputChange} />
                    <Field name="phone" label="Phone" type="text" value={phone} onChange={this.handleInputChange} />
                    <Field name="email" label="Email" type="text" value={email} onChange={this.handleInputChange} />
                </form>
                <button onClick={this.handleSubmit}>AddContact</button>
            </div>
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

//             import React, {Component} from 'react';
// import Field from './field'
// class ContactForm extends Component{
//    constructor(props){
//        super(props);
//        this.state={
//            firstName:'',
//            lastName:'',
//            phone:'',
//            email:''
//        };
//        this.handleInputChange = this.handleInputChange.bind(this)
//        this.handleSubmit=this.handleSubmit.bind(this)
//    }
//    handleInputChange(event){
//        const { name, value }= event.target;
//        console.log('NAME: %s- VALUE: %s', name,value);
//        this.setState({
//            [name]:value
//        })
//    }
//    handleSubmit(event){
//        event.preventDefault();
//        this.props.add(this.state);
//        console.log('handleSubmit Created : ', this.state);
//        const newState= {
//            firstName:'',
//            lastName:'',
//            phone:'',
//            email:''
//        };
//        this.setState(newState);
//    }
//    render (){
//        const { firstName,lastName, phone, email } =this.state;
//        return(
//            <form className='form' onSubmit={this.handleSubmit}>
//                {/* <div className="form-group">
//                    <label>First Name</label>
//                    <input onChange={this.handleInputChange} value={firstName} name="firstName" type="text" className="form-control"/>
//                </div> */}
//                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
//                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
//                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange}/>
//                <Field name="email" label="email" type="email" value={email} onChange={this.handleInputChange}/>

//                <button> Add Contact </button>
//            </form>
//        )
//    }
// }
// export default ContactForm