import React, {Component} from 'react'
// import NavigationBar from './NavigationBar.js'

class ComparisonPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.chooseBaby = this.chooseBaby.bind(this);
    }

    chooseBaby(winBaby, lossBaby){
        console.log(`${winBaby.name} wins!`);
        console.log(`${lossBaby.name} lost!`);
        this.props.changeDuelBaby(winBaby, lossBaby);
    }

    render() {
        return (
            <div>
                <div className='container jumbotron'>
                    <div className="row">
                        <div className="col-5">
                            <div className='square-image-container square-image-container-full'>
                                <img src={this.props.duelBabies.baby1.image} className="img-thumbnail"></img>
                            </div>
                            <hr/>
                            <div className="d-flex flex-column align-items-center">
                                <h4>{this.props.duelBabies.baby1.name}</h4>
                                <h5>W:{this.props.duelBabies.baby1.wins} / L:{this.props.duelBabies.baby1.losses}</h5>
                            </div>
                            <hr/>
                            <div className="d-flex flex-column align-items-center">
                                <button type="button" class="btn btn-primary btn-lg" onClick={() => {this.chooseBaby(this.props.duelBabies.baby1, this.props.duelBabies.baby2)}}>Vote for {this.props.duelBabies.baby1.name}</button>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <h1>VS.</h1>
                        </div>
                        <div className="col-5">
                            <div className='square-image-container square-image-container-full'>
                                <img src={this.props.duelBabies.baby2.image} className="img-thumbnail"></img>
                            </div>
                            <hr/>
                            <div className="d-flex flex-column align-items-center">
                                <h4>{this.props.duelBabies.baby2.name}</h4>
                                <h5>W:{this.props.duelBabies.baby2.wins} / L:{this.props.duelBabies.baby2.losses}</h5>
                            </div>
                            <hr/>
                            <div className="d-flex flex-column align-items-center">
                                <button type="button" class="btn btn-primary btn-lg" onClick={() => {this.chooseBaby(this.props.duelBabies.baby2, this.props.duelBabies.baby1)}}>Vote for {this.props.duelBabies.baby2.name}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComparisonPage;