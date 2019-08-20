import React from 'react';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import './App.css';
import NewBaby from './components/NewBaby';

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
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Route path='/' component={LandingPage}/>
          <Route path='/babies' component={ComparisonPage}/>
          <Router path='/babies/all' component={ShowAllPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
