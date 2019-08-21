import React from 'react'
import axios from 'axios'

class EditForm extends React.Component {
    constructor(props) {
        this.state = {
            name: this.props.currentBaby.name,
            age: this.props.currentBaby.age,
            weight: this.props.currentBaby.weight,
            about: this.props.currentBaby.about,
            wins: this.props.currentBaby.wins,
            losses: this.props.currentBaby.losses,
            image: this.props.currentBaby.image,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(event) {
        const response = await axios.put(`${baseURL}/babies/${this.props.currentBaby._id}`, {name: this.state.name, age: this.state.age, weight: this.state.weight, about: this.state.about, wins: this.state.wins, losses: this.state.losses, image: this.state.image})
        this.setState({
            name: "",
            age: "",
            weight: "",
            about: "",
            wins: "",
            losses: "",
            image: "",
        })
        this.props.updateBaby(response.data)
        window.location.replace(`${baseURL}/babies/${this.props.currentBaby._id}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            {this.renderRedirect()}
            <NavigationBar/>
            <div className="jumbotron container">
                <h3>Edit Baby</h3>
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
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            </form>
        )
    }
}

export default EditForm;