import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='landing'>
        <div className='main'>
          <h1> Welcome to: Baby Fight Club </h1>
          <a href='/babies/duel'> Enter </a>
        </div>

        <div className='logIn'>
          <a href='/log-in'><button>Log In</button></a>
          <a href='/new-user'><button>Register</button></a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
