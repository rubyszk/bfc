import React from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';


import NavigationBar from './NavigationBar';

class NewBaby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            weight: '',
            about: '',
            wins: 0,
            losses: 0,
            image: null,
            toIndexPage: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
                toIndexPage: true
        })
        const baseURL = this.props.baseURL;
        const response = await axios.post(`${baseURL}/babies/new`, {
            name: this.state.name,
            age: this.state.age,
            weight: this.state.weight,
            about: this.state.about,
            wins: this.state.wins,
            losses: this.state.losses,
            image: this.state.image,
            userId: this.props.currentUser._id
        });
        this.setState = {
            name: '',
            age: 0,
            weight: '',
            about: '',
            wins: 0,
            losses: 0,
            image: ''
        }
        this.props.addBaby(response.data.newBaby);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }


    renderRedirect = () => {
        if (this.state.toIndexPage) {
            return <Redirect to='/babies/all' />
        }
    }

    render() {
        return (
            <div>
            {this.renderRedirect()}
            <NavigationBar/>
            <div className="jumbotron container">
                <h3>Add a New Baby</h3>
                <Form onSubmit={this.handleSubmit}>
                    <hr />
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Name
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" id="name" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Age
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" id="age" name="age" value={this.state.age} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Weight Class
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Featherweight"
                                    value="Featherweight"
                                    name="weight"
                                    id="formHorizontalRadios1"
                                    onChange={this.handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Lightweight"
                                    value="Lightweight"
                                    name="weight"
                                    id="formHorizontalRadios2"
                                    onChange={this.handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Welterweight"
                                    value="Welterweight"
                                    name="weight"
                                    id="formHorizontalRadios3"
                                    onChange={this.handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Heavyweight"
                                    value="Heavyweight"
                                    name="weight"
                                    id="formHorizontalRadios4"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Biography
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" id="about" name="about" value={this.state.about} onChange={this.handleChange}  />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Image URL
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" id="image" name="image" value={this.state.image} placeholder="Image URL" onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="I accept the Terms and Conditions" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Add Baby</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            </div>
        )
    }
}

export default NewBaby;