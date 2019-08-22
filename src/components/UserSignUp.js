import React from 'react';


class NewBaby extends React.Component {
    render() {
        return (
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
                            <button type="button" class="btn btn-danger">Cancel</button>
                        </div>
                    </form>
            </div>    
        )
    }
}

export default NewBaby;