import React from 'react';
import axios from 'axios';

class NewBaby extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: 0,
            weight: '',
            about: '',
            wins: 0,
            losses: 0,
            image: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault()
        const baseURL = this.props.baseURL;
        const response = await axios.post(`${baseURL}/babies/new`, {
            name: this.state.name,
            age: this.state.age,
            weight: this.state.weight,
            about: this.state.about,
            wins: this.state.wins,
            losses: this.state.losses,
            image: this.state.image
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
        this.props.addBaby(response.data);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    render() {
        return(
            <div>
                <h3>Add a New Baby</h3>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} required/>
                    <br/>
                    <label for="age">Age</label>
                    <input type="number" id="age" name="age" value={this.state.age} onChange={this.handleChange}/>
                    <br/>
                    <label for="weight">Weight Class</label>
                    <input type="text" id="name" name="weight" value={this.state.weight} placeholder="Lightweight" onChange={this.handleChange}/>
                    <br/>
                    <label for="about">About</label>
                    <input type="text" id="about" name="about" value={this.state.about} onChange={this.handleChange}/>
                    <br/>
                    <label for="image">Image</label>
                    <input type="text" id="image" name="image" value={this.state.image} placeholder="Image URL" onChange={this.handleChange}/>
                </div>

                <div>
                    <input type="submit" value="Add Baby"/>
                </div>
                </form>
            </div>
        )
    }
}

export default NewBaby;