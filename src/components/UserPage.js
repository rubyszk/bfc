import React from 'react';
import {Redirect} from 'react-router-dom';

class UserPage extends React.Component {
    renderRedirect = () => {
        if (this.props.currentUser === null) {
          return <Redirect to='/' />;
        }
      };
    render()    {
        return(
            <div>
                {this.renderRedirect()}
                    <header>
                    {
                        this.props.currentUser !== null ? (<div className='top'> Hello, {this.props.currentUser.firstName} {this.props.currentUser.lastName} </div>) : null
                    }
                    </header>

                    <body>
                        <div>
                            {
                                this.props.currentUser !== null ?
                                (this.props.babies.map((baby) => {
                                if(baby.userId === this.props.currentUser._id){
                                    return(
                                        <div className='MainUser'>
                                            <div>
                                                <img className="img-thumbnail UserImage" alt="Responsive image" src={baby.image}></img>
                                            </div>
                                                <div className='UserBabyDetails'>
                                                    <ul className='list-group'>
                                                        <li className="badge badge-primary badge-pill">Details:</li>
                                                        <li className="badge badge-primary badge-pill">Age: {baby.age}</li>
                                                        <li className="badge badge-primary badge-pill">Weight: {baby.weight}</li>
                                                        <li className="badge badge-primary badge-pill">About: {baby.about}</li>
                                                        <li className="badge badge-primary badge-pill">Wins: {baby.wins}</li>
                                                        <li className="badge badge-primary badge-pill">Losses: {baby.losses}</li>
                                                    </ul>
                                                </div>  
                                        </div>
                                    )
                                }
                            })) : null
                        }
                        </div>
                    </body>
            </div>
        )
    }
}

export default UserPage;