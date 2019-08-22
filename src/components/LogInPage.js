import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

class LogInPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
          isAdmin: false,
          errLogin: false,
          errMessage: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
      event.preventDefault();
      const baseURL = this.props.baseURL;
      const response = await axios.post(`${baseURL}/sessions`, {
          username: this.state.username,
          password: this.state.password,
          isAdmin: this.state.isAdmin
      });
      this.setState({
          username: '',
          password: '',
          isAdmin: false
      })

      if(!response.data.error)
      {
        this.props.loginUser(response.data.currentUser);
        this.setState({
            toUserPage: true
        })
      } else {
        console.log('error')
        this.setState({
            errLogin: true,
            errMessage: response.data.error
        })
      }
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

  hasError = () => {
    if (this.state.errLogin) {
        return (
            <div class="container alert alert-danger" role="alert">
            {this.state.errMessage}
            </div>
        )
    }
}

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <NavigationBar/>
        {this.hasError()}
            <div className="jumbotron container">
                <h3> Log in </h3>
                <Form onSubmit={this.handleSubmit}>
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
                        <Button type="submit"> Enter </Button>
                    </Col>
                </Form.Group>
              </Form>
            </div> 
        </div>    

    )
  }
}

export default LogInPage;

