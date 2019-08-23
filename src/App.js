import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Show from './components/Show';
import ComparisonPage from './components/ComparisonPage.js';
import NewBaby from './components/NewBaby';
import Index from './components/Index';
import UserSignUp from './components/UserSignUp.js';
import LogInPage from './components/LogInPage.js'
import EditForm from './components/Edit.js'
import UserPage from './components/UserPage.js'

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
      },
      currentUser: {}
    };

    this.getBabies = this.getBabies.bind(this);
    this.addBaby = this.addBaby.bind(this);
    this.getSpecificBaby = this.getSpecificBaby.bind(this);
    this.getTwoRandomBabies = this.getTwoRandomBabies.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.changeDuelBaby = this.changeDuelBaby.bind(this);
    this.updateScores = this.updateScores.bind(this);
    this.createUser = this.createUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  // add new baby
  addBaby(baby) {
    const copyBabies = [...this.state.babies];
    copyBabies.push(baby);
    this.setState({
      babies: copyBabies
    });
  }

  // create new user
  createUser(user) {
    console.log('USER CREATED!')
  }

  // Log In User
  loginUser(user) {
    this.setState({
      currentUser: user
    })
  }

  componentDidMount() {
    this.getBabies();
    this.getTwoRandomBabies();
    // this.deleteBaby();
  }

  async deleteBaby(){
    const response = await axios.delete(`${baseURL}/babies/5d5ca9dbb7f31a0017c9360e`);
    const data = response.data.deletedBaby;
    console.log(data);
  }

  async getBabies() {
    const response = await axios(`${baseURL}/babies/all`);
    const data = response.data.foundBabies;
    this.setState({
      babies: data
    });
    console.log(this.state.babies);
  }

  async getSpecificBaby(id) {
    console.log(id);
    const response = await axios(`${baseURL}/babies/${id}`);
    const data = response.data.foundBaby;
    this.setState({
      currentBaby: data
    });
    console.log(this.state.currentBaby);
  }

  async getTwoRandomBabies() {
    const firstResponse = await axios(`${baseURL}/babies/random`);
    const baby1 = firstResponse.data.foundBabies;

    let secondResponse = null;
    let baby2 = {
      _id: baby1._id
    }
    // make some conditions to make sure baby1 is not equal to baby2
    while(baby2._id === baby1._id)
    {
      secondResponse = await axios(`${baseURL}/babies/random`);
      baby2 = secondResponse.data.foundBabies;
    }

    this.setState({
      duelBabies: {
        baby1: baby1,
        baby2: baby2
      }
    });
    console.log(this.state.duelBabies);
  }

  async updateScores(winBaby, lossBaby){
    let updatedWinBaby = winBaby;
    updatedWinBaby.wins = winBaby.wins + 1;

    await axios.put(`${baseURL}/babies/${winBaby._id}`, updatedWinBaby);

    let updatedLossBaby = lossBaby;
    updatedLossBaby.losses = lossBaby.losses + 1;

    await axios.put(`${baseURL}/babies/${lossBaby._id}`, updatedLossBaby);

    if(this.state.duelBabies.baby1._id === winBaby._id){
      console.log('hello')
      this.setState({
        duelBabies: {
          baby1: updatedWinBaby,
          baby2: updatedLossBaby
        }
      })
    } else {
      console.log('bye')
      this.setState({
        duelBabies: {
          baby1: updatedLossBaby,
          baby2: updatedWinBaby
        }
      })
    }

  }

  async changeDuelBaby(winBaby, lossBaby) {
    await this.updateScores(winBaby, lossBaby);

    let response = null;
    let newDuelBaby = {
      _id: winBaby._id
    }

    while(newDuelBaby._id === winBaby._id || newDuelBaby._id === lossBaby._id)
    {
      response = await axios(`${baseURL}/babies/random`);
      newDuelBaby = response.data.foundBabies;
    }

    console.log(newDuelBaby);

    if(this.state.duelBabies.baby1._id === lossBaby._id){
      console.log('hello')
      this.setState({
        duelBabies: {
          baby1: newDuelBaby,
          baby2: this.state.duelBabies.baby2
        }
      })
    } else {
      console.log('bye')
      this.setState({
        duelBabies: {
          baby1: this.state.duelBabies.baby1,
          baby2: newDuelBaby
        }
      })
    }

    console.log(this.state.duelBabies);
  }


  handleEditChange(event) {
    this.setState({
      currentBaby: {
        [event.currentTarget.name]: event.currentTarget.value
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={LandingPage} />
          <Route
            path='/babies/duel'
            render={() => <ComparisonPage duelBabies={this.state.duelBabies} changeDuelBaby={this.changeDuelBaby} currentUser={this.state.currentUser}/>}
          />
          <Route
            path='/babies/show'
            render={() => <Show currentBaby={this.state.currentBaby} getSpecificBaby={this.getSpecificBaby} currentUser={this.state.currentUser}/>}
          />
          <Route
            path='/babies/new'
            render={() => <NewBaby addBaby={this.addBaby} baseURL={baseURL} currentUser={this.state.currentUser}/>}
          />
          <Route
            path='/babies/all'
            render={() => <Index babies={this.state.babies} getSpecificBaby={this.getSpecificBaby} currentUser={this.state.currentUser}/>}
          />
          <Route 
            path='/new-user'
            render={() => <UserSignUp createUser={this.createUser} baseURL={baseURL} currentUser={this.state.currentUser}/>}
          />
          <Route
          path='/log-in'
          render={() => <LogInPage loginUser={this.loginUser} baseURL={baseURL} currentUser={this.state.currentUser}/>}
          />
          <Route
          path='/edit'
          render={() => <EditForm currentBaby={this.state.currentBaby} baseURL={baseURL} getSpecificBaby={this.getSpecificBaby} handleEditChange={this.handleEditChange} currentUser={this.state.currentUser}/>}
          />
          <Route
          path='/user'
          render={() => <UserPage babies={this.state.babies} />}
          />
        </div>
      </Router>
    );  
  }
}

export default App;
