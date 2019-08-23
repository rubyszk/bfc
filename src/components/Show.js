import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Link } from 'react-router-dom';
import ShowAllPage from './Index';

let baseURL = 'https://bfc-backend-api.herokuapp.com';
// let baseURL = 'https://localhost:3003';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toEditPage: false,
      toShowAllPage: false
      // baby: this.props.babies
    };
    this.renderRedirect = this.renderRedirect.bind(this);
    this.clickedDeleteBaby = this.clickedDeleteBaby.bind(this);
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
    // await axios.delete(`${baseURL}/babies/${id}`);

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
          <div className='show'>
            <div className='img-fluid babyUser'>
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
            <button className="btn btn-dark" onClick={() => {
              this.goToShowAllPage();
            }}>Back</button>
            {
              this.props.currentUser !== null && (this.props.currentBaby.userId === this.props.currentUser._id || this.props.currentUser.isAdmin)? (
                <button
                  className='btn btn-primary'
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
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    this.clickedDeleteBaby(this.props.currentBaby._id);
                  }}
                  key={this.props.currentBaby._id}
                >
                  DELETE
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Show;
