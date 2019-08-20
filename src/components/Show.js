import React from 'react';

class Show extends React.Component {
  render() {
    return (
      <div className='show'>
        <img scr={this.props.babies.image} />
        <h1>{this.props.babies.name}</h1>
        <h3>Age: {this.props.babies.age}</h3>
        <h3>Weight: {this.props.babies.weight}</h3>
        <h3>Wins: {this.props.babies.wins}</h3>
        <h3>Losses: {this.props.babies.losses}</h3>
        <h3>Bio: {this.props.babies.about}</h3>
      </div>
    );
  }
}

export default Show;
