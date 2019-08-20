import axios from 'axios';
import React from 'react';

let baseURL = 'https://bfc-backend-api.herokuapp.com/'

class Index extends React.Component {
    render() {
        return (
            <div className="index">
                    <h3>{this.props.babies[0].name}</h3>
            </div>
        )
    }
}

export default Index;