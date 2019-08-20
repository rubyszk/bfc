import React, {Component} from 'react'

class ComparisonPage extends Component {
    render() {
        return (
            <div className='images'>
                <div className='left'>
                    <img src={this.props.babies.image}></img>
                </div>
        
                <div className='right'>
                    <img src={this.props.babies.image}></img>
                </div>
                <a href='/babies/all'> Show All Fighters </a>
            </div>
        )
    }
}

export default ComparisonPage;