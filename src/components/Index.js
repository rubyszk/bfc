import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom'

import NavigationBar from './NavigationBar';

let baseURL = 'https://bfc-backend-api.herokuapp.com/'

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toShowPage: false
        }
        this.goToShowPage = this.goToShowPage.bind(this);
    }

    goToShowPage(id){
        console.log('clicked');
        this.props.getSpecificBaby(id).then(() => {
            this.setState({
                toShowPage: true
            })
        })
    }

    renderRedirect = () => {
        if (this.state.toShowPage) {
            return <Redirect to='/babies/show' />
        }
    }

    render() {
        return (
            <div>
            {this.renderRedirect()}
            <NavigationBar/>
                <div className="container">
                    <div className="index row justify-content-center">
                        {this.props.babies.map((baby) => {
                            return (
                            <div className="col-md-auto square-image-container" onClick={() => {this.goToShowPage(baby._id)}}>
                                <img src={baby.image} className="img-thumbnail"></img>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;