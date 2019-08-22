import React from 'react';
import NavigationBar from './NavigationBar.js'

class NewBaby extends React.Component {
    
    // renderRedirect = () => {
    //     if (this.state.toShowAllPage) {
    //         return <Redirect to='/babies/all' />
    //     }
    // }


    render() {
        return (
            <div>
                {/* {this.renderRedirect()}   */}
                <NavigationBar /> 
                <div className='jumbotron container'>
                        <h1> Sign Up New User </h1>
                        <p>Please fill out the following to create an account</p>
                        <form>
                            <div className="form-group">
                                <label for='email'><b>Email</b></label>
                                <input type='text' className='form-control' placeholder='Enter Email' name='email'></input>
                            </div>

                            <div className="form-group">
                                <label for='email' ><b>Password</b></label>
                                <input type='text' className='form-control' placeholder='Enter Password' name='password'></input>
                            </div>

                            <div className="form-group">
                                <label for='email' ><b> Re-Enter Password</b></label>
                                <input type='text' className='form-control' placeholder='Re-Enter Password' name='ReEnterPassword'></input>
                            </div>

                
                            <div className="clearfix">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <a href='/'><button className='back' type="button" className="btn btn-danger"> Cancel </button></a>
                            </div>
                        </form>
                </div>    
            </div>     
        )
    }
}

export default NewBaby;