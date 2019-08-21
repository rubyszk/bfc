import React from 'react';
import axios from 'axios';

import LandingPage from './components/LandingPage';
import Show from './components/Show';
import ComparisonPage from './components/ComparisonPage.js';
import './App.css';
import NewBaby from './components/NewBaby';
import Index from './components/Index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

let baseURL = 'https://bfc-backend-api.herokuapp.com';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babies: [],
      currentBaby: {},
      duelBabies: {
        baby1: {},
        baby2: {}
      }
    };

    this.getBabies = this.getBabies.bind(this);
    this.addBaby = this.addBaby.bind(this);
    this.getSpecificBaby = this.getSpecificBaby.bind(this);
    this.getTwoRandomBabies = this.getTwoRandomBabies.bind(this);
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
    this.getTwoRandomBabies();
    // this.deleteBaby();
  }

  async deleteBaby(){
    const response = await axios.delete(`${baseURL}/babies/5d5ca9dbb7f31a0017c9360e`);
    const data = response.data;
    console.log(data);
  }

  async getBabies() {
    const response = await axios(`${baseURL}/babies/all`);
    const data = response.data;
    this.setState({
      babies: data
    });
    console.log(this.state.babies);
  }

  async getSpecificBaby(id) {
    console.log(id);
    const response = await axios(`${baseURL}/babies/${id}`);
    const data = response.data;
    this.setState({
      currentBaby: data
    });
    console.log(this.state.currentBaby);
  }

  async getTwoRandomBabies() {
    const firstResponse = await axios(`${baseURL}/babies/random`);
    const baby1 = firstResponse.data;

    let secondResponse = null;
    let baby2 = {
      _id: baby1._id
    }
    // make some conditions to make sure baby1 is not equal to baby2
    while(baby2._id === baby1._id)
    {
      secondResponse = await axios(`${baseURL}/babies/random`);
      baby2 = secondResponse.data;
    }

    this.setState({
      duelBabies: {
        baby1: baby1,
        baby2: baby2
      }
    });
    console.log(this.state.duelBabies);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={LandingPage} />
          <Route
            path='/babies/duel'
            render={() => <ComparisonPage duelBabies={this.state.duelBabies} />}
          />
          <Route
            path='/babies/show'
            render={() => <Show currentBaby={this.state.currentBaby} />}
          />
          <Route
            path='/babies/new'
            render={() => <NewBaby addBaby={this.addBaby} baseURL={baseURL} />}
          />
          <Route
            path='/babies/all'
            render={() => <Index babies={this.state.babies} getSpecificBaby={this.getSpecificBaby}/>}
          />
          <Route 
            path='/new-user'
            render={() => <UserSignUp />}
          />
        </div>
      </Router>
    );  
  }
}

export default App;
