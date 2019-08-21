import React from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Link } from 'react-router-dom';
import ShowAllPage from './Index';

class Show extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <div className="container jumbotron">
          <div className='show'>
            <div className="square-image-container mx-auto">
              <img src={this.props.currentBaby.image} alt='' className="img-thumbnail"/>
            </div>
            <h1>{this.props.currentBaby.name}</h1>
            <h3>Age: {this.props.currentBaby.age}</h3>
            <h3>Weight: {this.props.currentBaby.weight}</h3>
            <h3>Wins: {this.props.currentBaby.wins}</h3>
            <h3>Losses: {this.props.currentBaby.losses}</h3>
            <h3>Bio: {this.props.currentBaby.about}</h3>
            <Link to='/babies/all' component={ShowAllPage}>
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
