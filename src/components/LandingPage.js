import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Show from './Show';
class LandingPage extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <h1> Welcome to: Baby Fight Club </h1>
          <Link to='/Show'>Enter</Link>
          <Route path='/Show' component={Show} />
        </div>
      </Router>
    );
  }
}

export default LandingPage;
