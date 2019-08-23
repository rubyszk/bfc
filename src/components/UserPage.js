import React from 'react';
import { Redirect } from 'react-router-dom';

class UserPage extends React.Component {
  constructor(props)  {
    super(props)  
      this.state = {
        toEditPage : false
      }
      this.goToEdit = this.goToEdit.bind(this)
  } 
  renderRedirect = () => {
    if (this.props.currentUser === null) {
      return <Redirect to='/' />;
    } else if (this.state.toEditPage) {
      return <Redirect to='/edit'/>
    }
  };

  goToEdit()  {
    this.setState({
      toEditPage : true
    })
  }

  render() {
    return (
      <div>
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
                            <button onClick={this.goToEdit}type='button' class='btn btn-light'>
                              Edit
                            </button>
                            <button
                              type='button'
                              class='btn btn-danger'
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
