import React from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

import NavigationBar from './NavigationBar';

class NewBaby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isAdmin: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
                toUserPage: true
        })
        const baseURL = this.props.baseURL;
        const response = await axios.post(`${baseURL}/users/new`, {
            username: this.state.username,
            password: this.state.password,
            isAdmin: this.state.isAdmin
        });
        this.setState = {
            username: '',
            password: '',
            isAdmin: false
        }
        this.props.addUser(response.data);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }


    renderRedirect = () => {
        if (this.state.toUserPage) {
            return <Redirect to='/user' />
        }
    }

    render() {
        return (
            <div>
            {this.renderRedirect()}
            <NavigationBar/>
            <div className="jumbotron container">
                <h3>Register to BFC</h3>
                <Form onSubmit={this.handleSubmit}>
                    <hr />
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Username
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" id="username" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Password
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Register</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            </div>
        )
    }
}

export default NewBaby;