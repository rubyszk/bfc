import React from 'react';
import { Redirect } from 'react-router-dom';
// import NavigationBar from './NavigationBar.js'

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toEditPage: false
    };
    this.goToEdit = this.goToEdit.bind(this);
  }
  renderRedirect = () => {
    if (this.props.currentUser === null) {
      return <Redirect to='/' />;
    } else if (this.state.toEditPage) {
      return <Redirect to='/edit' />;
    }
  };

  goToEdit(id) {
    this.setState({
      toEditPage: true
    });
    this.props.getSpecificBaby(id);
  }

  render() {
    return (
      <div>
        {/* <NavigationBar
            currentUser={this.state.currentUser}
            logoutUser={this.logoutUser}
          /> */}
        {this.renderRedirect()}
        <header>
          {this.props.currentUser !== null ? (
            <div className='top'>
              {' '}
              <h1>
                {' '}
                Hello, {this.props.currentUser.firstName}{' '}
                {this.props.currentUser.lastName}{' '}
              </h1>{' '}
            </div>
          ) : null}
        </header>

        <body>
          <div>
            {this.props.currentUser !== null
              ? this.props.babies.map(baby => {
                  if (baby.userId === this.props.currentUser._id) {
                    return (
                      <div className='MainUser'>
                        <div>
                          <img
                            className='img-thumbnail UserImage'
                            alt='Responsive image'
                            src={baby.image}
                          />
                        </div>
                        <div className='UserBabyDetails'>
                          <ul className='list-group'>
                            <li className='list-group-item list-group-item-action'>
                              Details:
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              Name: {baby.name}{' '}
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              Age: {baby.age}
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              Weight: {baby.weight}
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              About: {baby.about}
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              Wins: {baby.wins}
                            </li>
                            <li className='list-group-item list-group-item-action'>
                              Losses: {baby.losses}
                            </li>
                          </ul>

                          <div className='userButtons'>
                            <button
                              onClick={() => {
                                this.goToEdit(baby._id);
                              }}
                              type='button'
                              id="edit"
                              class='btn btn-light'
                              key={this.props.currentBaby._id}
                            >
                              Edit
                            </button>

                            <button
                              type='button'
                              class='btn btn-danger'
                              id="danger"
                              onClick={() => {
                                this.props.deleteBaby(baby._id);
                              }}
                              key={this.props.currentBaby._id}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              : null}
          </div>
        </body>
      </div>
    );
  }
}

export default UserPage;
