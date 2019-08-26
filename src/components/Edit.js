import React from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import NavigationBar from './NavigationBar.js'
class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toShowPage: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault()
    this.setState({
      toShowPage: true
    })
    this.props.updateBaby();
  }

  renderRedirect = () => {
    if (this.state.toShowPage) {
      return <Redirect to='/babies/show' />;
    }
  };

  render() {
    return (
      <div>
      {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <div className='jumbotron container'>
            <h3>Edit {this.props.currentBaby.name} </h3>
            <Form onSubmit={this.handleSubmit}>
              <hr />
              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type='text'
                    id='name'
                    name='name'
                    value={this.props.currentBaby.name}
                    placeholder='Name'
                    onChange={this.props.handleEditChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Age
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type='number'
                    id='age'
                    name='age'
                    value={this.props.currentBaby.age}
                    onChange={this.props.handleEditChange}
                  />
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label as='legend' column sm={2}>
                    Weight Class
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type='radio'
                      label='Featherweight'
                      value='Featherweight'
                      name='weight'
                      id='formHorizontalRadios1'
                      onChange={this.props.handleEditChange}
                    />
                    <Form.Check
                      type='radio'
                      label='Lightweight'
                      value='Lightweight'
                      name='weight'
                      id='formHorizontalRadios2'
                      onChange={this.props.handleEditChange}
                    />
                    <Form.Check
                      type='radio'
                      label='Welterweight'
                      value='Welterweight'
                      name='weight'
                      id='formHorizontalRadios3'
                      onChange={this.props.handleEditChange}
                    />
                    <Form.Check
                      type='radio'
                      label='Heavyweight'
                      value='Heavyweight'
                      name='weight'
                      id='formHorizontalRadios4'
                      onChange={this.props.handleEditChange}
                    />
                  </Col>
                </Form.Group>
              </fieldset>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Biography
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as='textarea'
                    id='about'
                    name='about'
                    value={this.props.currentBaby.about}
                    onChange={this.props.handleEditChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Image URL
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type='text'
                    id='image'
                    name='image'
                    value={this.props.currentBaby.image}
                    placeholder='Image URL'
                    onChange={this.props.handleEditChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label='I accept the Terms and Conditions' />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type='submit'>Submit</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </form>
      
      </div>
    );
  }
}

export default EditForm;
