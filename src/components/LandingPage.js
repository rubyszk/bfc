
import React, {Component} from 'react'

class LandingPage extends Component {
    render() {
        console.log(this.props)
        return (
            // <Router>
                <div>
                    <h1> Welcome to: Baby Fight Club </h1>
                    <a href='/babies'> Enter </a>
                </div>
            // </Router>
        )
    }
}



export default LandingPage;