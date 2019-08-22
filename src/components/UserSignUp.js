import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class NewBaby extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            username : '',
            password : '',
            reEnterPassword : '',
            toLoginPage: false
        }
        this.handleUserCreation = this.handleUserCreation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleUserCreation(event) {
        event.preventDefault()
        const baseURL = this.props.baseURL;
        const response = await axios.post(`${baseURL}/users`, this.state);
        this.setState({
            firstName : '',
            lastName : '',
            username : '',
            password : '',
            reEnterPassword : '',
            toLoginPage: true
        });
        this.props.createUser(response.data);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }


    renderRedirect = () => {
        if (this.state.toLoginPage) {
            return <Redirect to='/log-in' />
        }
    }

    render() {
        return (
            <div className='jumbotron container'>
            {this.renderRedirect()}
                    <h1> Sign Up New User </h1>
                    <p>Please fill out the following to create an account</p>
                    <form onSubmit={this.handleUserCreation}>
                        <div className="form-group">
                            <label for='firstName'><b>First Name</b></label>
                            <input type='text' className='form-control' placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.handleChange} required></input>
                        </div>

                        <div className="form-group">
                            <label for='lastName'><b>Last Name</b></label>
                            <input type='text' className='form-control' placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={this.handleChange} required></input>
                        </div>

                        <div className="form-group">
                            <label for='username'><b>Username</b></label>
                            <input type='username' className='form-control' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} required></input>
                        </div>

                        <div className="form-group">
                            <label for='email' ><b>Password</b></label>
                            <input type='password' className='form-control' placeholder='Enter Password' name='password' onChange={this.handleChange} value={this.state.password} required></input>
                        </div>

                        <div className="form-group">
                            <label for='email' ><b> Re-Enter Password</b></label>
                            <input type='password' className='form-control' placeholder='Re-Enter Password' name='reEnterPassword' value={this.state.reEnterPassword} onChange={this.handleChange} required></input>
                        </div>

                        <div className="clearfix">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <a href='/'><button className='back' type="button" className="btn btn-danger"> Cancel </button></a>
                        </div>
                    </form>
            </div>    
        )
    }
}

export default NewBaby;