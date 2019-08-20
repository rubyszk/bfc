import React from 'react';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import './App.css';
import NewBaby from './components/NewBaby';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

let baseURL = 'https://bfc-backend-api.herokuapp.com';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babies: []
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
  }

  async getBabies() {
    const response = await axios(`${baseURL}/babies/all`);
    const data = response.data;
    this.setState({
      babies: data
    });
    console.log(this.state.babies)
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Route path='/' exact component={LandingPage}/>
          {/* <Route path='/babies' component={ComparisonPage}/> */}
          {/* <Route path='/babies/all' component={ShowAllPage}/> */}
          <Route path='/babies/new' render={() => 
            <NewBaby addBaby={this.addBaby} baseURL={baseURL}/>
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
