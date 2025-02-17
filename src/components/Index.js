// import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom'
// import NavigationBar from './NavigationBar.js'
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toShowPage: false
    };
    this.goToShowPage = this.goToShowPage.bind(this);
  }

  goToShowPage(id) {
    console.log('clicked');
    this.props.getSpecificBaby(id).then(() => {
      this.setState({
        toShowPage: true
      });
    });
  }

  renderRedirect = () => {
    if (this.state.toShowPage) {
      return <Redirect to='/babies/show' />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div className='container jumbotron'>
          <div className='index row justify-content-center'>
            {this.props.babies
              .sort((a, b) => {
                const percentage1 = (a.wins / a.losses) * 100;
                const percentage2 = (b.wins / b.losses) * 100;
                return percentage2 - percentage1;
              })
              .map(baby => {
                return (
                  <div
                    className='col-md-auto square-image-container'
                    onClick={() => {
                      this.goToShowPage(baby._id);
                    }}
                    key={baby._id}
                  >
                    <img src={baby.image} className='img-thumbnail' style={{cursor: 'pointer'}}  />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
