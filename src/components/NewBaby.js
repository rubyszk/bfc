import React from 'react';
// import axios from 'axios';

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
        const response = await axios.post(`${baseURL}/babies/new`, this.state);
        this.setState = {
            name: '',
            age: 0,
            weight: '',
            about: '',
            wins: 0,
            losses: 0,
            image: ''
        }
        // this.props.addBaby(response.data);
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
                    <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange}/>

                    <input type="number" name="age" value={this.state.url} onChange={this.handleChange}/>
                </div>

                <div className="row d-flex justify-content-center px-3">
                    <input type="submit"  className="btn btn-primary btn-block" value="Add Bookmark"/>
                </div>
                </form>
            </div>
        )
    }
}

export default NewFormComponent;