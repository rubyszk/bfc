import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='landing'>
        <h1> Welcome to: Baby Fight Club </h1>
        <a href='/babies'> Enter </a>
      </div>
    );
  }
}

export default LandingPage;
