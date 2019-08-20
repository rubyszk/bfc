import React from 'react';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import Show from './components/Show';
import ComparisonPage from './components/ComparisonPage.js';
import './App.css';
import NewBaby from './components/NewBaby';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

let baseURL = 'https://bfc-backend-api.herokuapp.com';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babies: [],
      currentBaby: {}
    };

    this.getBabies = this.getBabies.bind(this);
    this.addBaby = this.addBaby.bind(this);
  }

  // add new baby
  addBaby(baby) {
    const copyBabies = [...this.state.babies];
    copyBabies.push(baby);
    this.setState({
      babies: copyBabies
    });
  }

  componentDidMount() {
    this.getBabies();
    this.getSpecificBaby();
  }

  async getBabies() {
    const response = await axios(`${baseURL}/babies/all`);
    const data = response.data;
    this.setState({
      babies: data
    });
    console.log(this.state.babies);
  }

  async getSpecificBaby() {
    const id = '5d5c49a7419c2d00174ae023';
    const response = await axios(`${baseURL}/babies/${id}`);
    const data = response.data;
    this.setState({
      currentBaby: data
    });
    console.log(this.state.currentBaby);
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Route path='/' exact component={LandingPage} />
          {/* <Route path='/babies' component={ComparisonPage}/> */}
          {/* <Route path='/babies/all' component={ShowAllPage}/> */}
          <Route
            path='/babies/show'
            render={() => <Show babies={this.state.currentBaby} />}
          />
          <Route
            path='/babies/new'
            render={() => <NewBaby addBaby={this.addBaby} baseURL={baseURL} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
