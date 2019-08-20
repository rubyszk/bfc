import axios from 'axios';
import React from 'react';

let baseURL = 'https://bfc-backend-api.herokuapp.com/'

class Index extends React.Component {
    render() {
        return (
            <div className="index">
                {this.props.babies.map((baby) => {
                    return <img src={baby.image}></img>
                })}
            </div>
        )
    }
}

export default Index;