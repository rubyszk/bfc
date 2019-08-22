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
                                                Details:
                                                Age: {baby.age}
                                                Weight: {baby.weight}
                                                About: {baby.about}
                                                Wins: {baby.wins}
                                                Losses: {baby.losses}
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