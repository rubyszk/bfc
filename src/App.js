import React from 'react';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import './App.css';

let baseURL = 'https://bfc-backend-api.herokuapp.com';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babies: []
    };

    this.getBabies = this.getBabies.bind(this);
  }

  componentDidMount() {
    this.getBabies();
  }

  async getBabies() {
    const response = await axios(`${baseURL}/babies/all`);
    const data = response.data;
    this.setState({
      babies: data
    });
  }

  render() {
    return (
      <div className='container'>
        <LandingPage />
      </div>
    );
  }
}

export default App;
