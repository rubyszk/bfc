import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';
import ShowAllPage from './Index';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toEditPage: false,
      toShowAllPage: false
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

  goToShowAllPage() {
    this.setState({
      toShowAllPage: true
    });
  }

  renderRedirect = () => {
    if (this.state.toEditPage) {
      return <Redirect to='/edit' />;
    } else if (this.state.toShowAllPage) {
      return <Redirect to='/babies/all' />;
    } 
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
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
<<<<<<< HEAD
            <a href='/babies/all'>
              <button class='btn btn-dark'>Back</button>
            </a>
            <button
              className='btn btn-primary edit'
=======
            <button className="btn btn-dark" onClick={() => {
              this.goToShowAllPage();
            }}>Back</button>
            {
              this.props.currentUser !== null && (this.props.currentBaby.userId === this.props.currentUser._id || this.props.currentUser.isAdmin)? (
                <button
              className='btn btn-primary'
>>>>>>> 2d8e85d3f38f4e41ff0b25949c73c29d06b702fa
              onClick={() => {
                this.goToEditPage(this.props.currentBaby._id);
              }}
              key={this.props.currentBaby._id}
            >
              EDIT
            </button>
              ) : null
            }
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
