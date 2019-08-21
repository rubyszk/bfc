import React, { Component } from 'react';


class LogInPage extends Component {
  render() {
    return (
        <div className='jumbotron container'>
            <h1>Sign Up New User</h1>
            <p>Please fill out the following to create an account</p>
            <form>
                <label for='email'><b>Email</b></label>
                <input type='text' placeholder='Enter Email' name='email'></input>

                <label for='email'><b>Password</b></label>
                <input type='text' placeholder='Enter Password' name='password'></input>

                <label for='email'><b> Re-Enter Password</b></label>
                <input type='text' placeholder='Re-Enter Password' name='ReEnterPassword'></input>

                <div class="clearfix">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-danger">Cancel</button>
                </div>
            </form>
        </div>
    )
  }
}

export default LogInPage;
