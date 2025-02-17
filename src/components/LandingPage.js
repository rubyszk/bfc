import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  
  componentDidMount() {
    window.scrollTo(0,5000)
  }
  
  render() {
    return (
      <div className='landing'>
        <div class="header">
              <h1 class="head">Let's get ready to...</h1>
              <h1 class="logo"> Rumble </h1>
              {
                this.props.currentUser !== null ?
                <div className='d-flex justify-content-around'>
                    <Link to='/babies/duel'><button type="button" class="btn btn-secondary btn-lg btn-block"> Enter </button></Link>
                </div>
              :
              <div id="links">
                  <Link to='/babies/duel'><button type="button" id="btn1" class="btn btn-secondary btn-lg btn-block" >Enter</button></Link>
              </div>
             }
             </div>

      </div>
    );
  }
}

export default LandingPage;
