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

  async clickedDeleteBaby(id) {
    this.props.deleteBaby(id);
    console.log('clicked delete');
    this.setState({
      toShowAllPage: true
    });
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div className='container jumbotron'>
          {this.props.currentBaby ? (
            <div className='show'>
              <div className='img-fluid babyUser'>
                <img
                  src={this.props.currentBaby.image}
                  alt=''
                  className='img-thumbnail show'
                />
              </div>

              <div className="info">
              <h1>{this.props.currentBaby.name}</h1>
              <h3 id="age">Age:</h3> <h4> {this.props.currentBaby.age} months </h4>
              <h3>Weight:</h3> <h4> {this.props.currentBaby.weight} </h4>
              <h3>About:</h3> <h4> {this.props.currentBaby.about} </h4>
              <h3>Wins: </h3> <h4>{this.props.currentBaby.wins}</h4>
              <h3>Losses:</h3> <h4> {this.props.currentBaby.losses}</h4>
            </div>

              {this.props.currentUser !== null &&
              (this.props.currentBaby.userId === this.props.currentUser._id ||
                this.props.currentUser.isAdmin) ? (
                <button id="editBaby"
                  className='btn btn-primary showButton'
                  onClick={() => {
                    this.goToEditPage(this.props.currentBaby._id);
                  }}
                  key={this.props.currentBaby._id}
                >
                  EDIT
                </button>
              ) : null}


              {this.props.currentUser !== null &&
              (this.props.currentBaby.userId === this.props.currentUser._id ||
                this.props.currentUser.isAdmin) ? (
                <button id="deleteBaby"
                  className='btn btn-danger showButton'
                  onClick={() => {
                    this.clickedDeleteBaby(this.props.currentBaby._id);
                  }}
                  key={this.props.currentBaby._id}
                >
                  DELETE
                </button>
              ) : null}
              
              <button 
                className="btn btn-dark showButton" onClick={() => {
                this.goToShowAllPage();
              }}
              >
                Back</button>
              </div>
            </div>
          ) : null}

          <button id="goBack" className="btn btn-dark showButton" onClick={() => {
              this.goToShowAllPage();
              }}>Back</button>
        </div>
      </div>
    );
  }
}

export default Show;
