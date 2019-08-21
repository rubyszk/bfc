import React, { Component } from 'react';

class LogInPage extends Component {
  render() {
    return (
        <div className='logIn'>
            <h1>Sign Up New User</h1>
            <p>Please fill out the following to create an account</p>
            <form>
                <label for='email'><b>Email</b></label>
                <input type='text' placeholder='Enter Email' name='email'></input>

                <label for='email'><b>Password</b></label>
                <input type='text' placeholder='Enter Password' name='password'></input>
            </form>
        </div>
    )
  }
}

export default LogInPage;

// <p>Please fill in this form to create an account.</p>

// <label for="email"><b>Email</b></label>
//     <input type="text" placeholder="Enter Email" name="email" required>

// <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required></input>

// <label for="psw-repeat"><b>Repeat Password</b></label>
//     <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

// <label>
//     <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me </input>
// </label>

// <p> By creating an account you agree to our <a href="#" style="color:dodgerblue"> Terms & Privacy. </a></p>

// <div class="clearfix">
//     <button type="button" class="cancelbtn"> Cancel </button>
//     <button type="submit" class="signupbtn"> Sign Up </button>
// </div>
// </form>
// </div>