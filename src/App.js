import React from 'react';
import LandingPage from './components/LandingPage';
import './App.css';
import LandingPage from './components/LandingPage.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1>Filler</h1>
      <LandingPage />
      </div>
    );
  }
}

export default App;
