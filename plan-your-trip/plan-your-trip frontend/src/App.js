import React, {useState, useEffect} from "react";
import HomePage from './HomePage/HomePage';
import Login from './Authentication/Login';

function App(){
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);

  const getUserName = () => {
    return fetch('http://localhost:9999/userinfo', { credentials: "include"})
    .then(r => {
      if(r.ok) {
        return r.json();
      } else {
        setLoggedIn(false);
        setUserName(undefined);
        return { success: false };
      }
    }).then(r => {
      if(r.success !== false) {
        setLoggedIn(true);
        setUserName(r.userName);
        setUserEmail(r.userEmail);
      }
    });
  }

  useEffect(() => {
    getUserName();
  }, []);


  const signupHandler = (username,useremail, password) => {
    loginOrSignup('http://localhost:9999/signup', username,useremail, password);
  };
  const loginHandler = (useremail, password) => {
    loginOrSignup('http://localhost:9999/login', useremail, password);
  };

  const logoutHandler = () => {
    return fetch('http://localhost:9999/logout', { credentials: 'include'})
    .then(r => {
      if(r.ok) {
        setLoggedIn(false);
        setUserName(undefined);
        setUserEmail(undefined);
      }
    })
  };


  const loginOrSignup = (url, useremail, password) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ userEmail: useremail, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include"
    })
      .then((r) => {
        if(r.ok) {
          return { success: true };
        } else {
          return r.json()
        }
      })
      .then((r) => {
        if(r.success === true) {
          return getUserEmail();
        } else {
          setError(r.err);
        }
      });
  }
  
  return loggedIn ? (
    <HomePage useremail={userEmail} logoutHandler={logoutHandler}/>
  ) : (
    <Login
      signupHandler={signupHandler}
      loginHandler={loginHandler}
      error={error}
    />
  );
}
export default App;