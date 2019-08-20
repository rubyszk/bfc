import React, {Component} from 'react'

class ComparisonPage extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='images'>
                <div className='left'>
                    <img src='https://cdn.pixabay.com/photo/2015/09/09/20/23/baby-933097__340.jpg'></img>
                </div>
        
                <div className='right'>
                    <img src='https://cdn.pixabay.com/photo/2015/09/09/20/23/baby-933097__340.jpg'></img>
                </div>
                <a href='/babies/all'> Show All Fighters </a>
            </div>
        )
    }
}

export default ComparisonPage;