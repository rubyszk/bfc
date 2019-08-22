import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="d-flex align-items-center">
        <div className='jumbotron container'>
          <div className='main d-flex justify-content-center'>
            <h1 class="display-1"> Rumble </h1>
          </div>
          <div className='d-flex justify-content-around'>
          <a href='/babies/duel'><button type="button" class="btn btn-primary">Enter</button></a>
          </div>
          <div id="landing" className='d-flex justify-content-around'>
            <a href='/log-in'><button type="button" class="btn btn-primary">Log In</button></a>
            <a href='/new-user'><button type="button" class="btn btn-primary">Register</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
