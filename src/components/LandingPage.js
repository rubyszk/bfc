import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './LandingPage.css'

class LandingPage extends Component {
  renderRedirect = () => {
    if (this.props.currentUser !== null) {
      return <Redirect to='/user' />;
    }
  };
  render() {
    return (
      <div className='landing'>
      {this.renderRedirect()}
        <div className="d-flex align-items-center">
          <div className='jumbotron container'>
            <div className='main d-flex justify-content-center'>
              <h1 class="display-1"> Rumble </h1>
            </div>

            <div className='d-flex justify-content-around'>
              <Link to='/babies/duel'><button type="button" class="btn btn-primary">Enter</button></Link>
              <Link to='/log-in'><button type="button" class="btn btn-primary">Log In</button></Link>
              <Link to='/new-user'><button type="button" class="btn btn-primary">Register</button></Link>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default LandingPage;
