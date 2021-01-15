import React from 'react';
import './Login.css';

function signUpButton(){
  document.getElementById('container').classList.add("right-panel-active");
}
function signInButton(){
  document.getElementById('container').classList.remove("right-panel-active");
}

export default function Login(){
  return(
    <>
      <img className="sideimgguy" src="https://thepointsguy.com/wp-content/themes/tpg-2016/client/images/tpg-weekly-update-man-left.svg" alt="sideimg"></img>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="inputfields">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <button className="sinsup">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="inputfields">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <a href="#">Forgot your password?</a>
            <button className="sinsup">Sign In</button>
          </form>
        </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            {/* <a href="/SignIn"><button className="authbtn" onClick={signInButton} id="signIn">Sign In</button></a> */}
            <button className="authbtn" onClick={signInButton} id="signIn"><a href="/SignIn">Sign In</a></button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend 3002!</h1>
            <p>Enter your personal details and start journey with us</p>
            {/* <a href="/SignUp"><button className="authbtn" onClick={signUpButton} id="signUp">Sign Up</button></a> */}
            <button className="authbtn" onClick={signUpButton} id="signUp"><a href="/SignUp">Sign Up</a></button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}