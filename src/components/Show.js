import React from 'react';
import NavigationBar from './NavigationBar';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';
import ShowAllPage from './Index';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toEditPage: false
    };
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  goToEditPage(id) {
    this.setState({
      toEditPage: true
    });
    console.log('clicked');
    this.props.getSpecificBaby(id);
  }

  renderRedirect = () => {
    if (this.state.toEditPage) {
      return <Redirect to='/edit' />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <NavigationBar />
        <div className='container jumbotron'>
          <div className='show'>
            <div className='square-image-container mx-auto show'>
              <img
                src={this.props.currentBaby.image}
                alt=''
                className='img-thumbnail show'
              />
            </div>
            <h1>{this.props.currentBaby.name}</h1>
            <h3>Age: {this.props.currentBaby.age} months</h3>
            <h3>Weight: {this.props.currentBaby.weight}</h3>
            <h3>Wins: {this.props.currentBaby.wins}</h3>
            <h3>Losses: {this.props.currentBaby.losses}</h3>
            <h3>Bio: {this.props.currentBaby.about}</h3>
            <a href='/babies/all'>
              <button class='btn btn-dark'>Back</button>
            </a>
            <button
              className='btn btn-primary edit'
              onClick={() => {
                this.goToEditPage(this.props.currentBaby._id);
              }}
              key={this.props.currentBaby._id}
            >
              EDIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
