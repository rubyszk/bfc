import React, {Component} from 'react'
import NavigationBar from './NavigationBar';

class ComparisonPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className='container jumbotron'>
                    <div className="row">
                        <div className='col square-image-container'>
                            <img src={this.props.duelBabies.baby1.image} className="img-thumbnail"></img>
                        </div>
                
                        <div className='col square-image-container'>
                            <img src={this.props.duelBabies.baby2.image} className="img-thumbnail"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComparisonPage;