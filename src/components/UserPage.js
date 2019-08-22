import React from 'react';
import NavigationBar from './NavigationBar';



class UserPage extends React.Component {
    render()    {
        return(
            <div>
                <NavigationBar />
                    <header>
                        <div className='top'> {this.props.userName} </div>
                    </header>

                    <body>
                        <div>
                            {this.props.babies.map((baby) => {
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
                            })}
                        </div>
                    </body>
            </div>
        )
    }
}

export default UserPage;