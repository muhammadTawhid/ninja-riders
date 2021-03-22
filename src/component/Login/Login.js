import React, { useState, useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { Link, useHistory, useLocation } from 'react-router-dom';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

function Login() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  setLoggedInUser(user)

  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser);

        history.replace(from);
        console.log(signedInUser)
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser);

        history.replace(from);

      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          phot: '',
          email: '',
          password: '',
          error: '',
          isValid: false,
          existingUser: false
        }
        setUser(signedOutUser);
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const is_valid_email = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
  const hasNumber = input => /\d/.test(input);

  const switchForm = e => {
    const createdUser = { ...user };
    createdUser.existingUser = e.target.checked;
    setUser(createdUser);
  }
  const handleChange = e => {
    const newUserInfo = {
      ...user
    };

    let isValid = true;
    if (e.target.name === 'email') {
      isValid = is_valid_email(e.target.value);
    }
    if (e.target.name === "password") {
      isValid = e.target.value.length > 8 && hasNumber(e.target.value);
    }

    newUserInfo[e.target.name] = e.target.value;
    newUserInfo.isValid = isValid;
    setUser(newUserInfo);
  }

  const createAccount = (event) => {
    if (user.isValid && user.existingUser) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const { displayName, photoURL, email } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);

          history.replace(from);
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    if (user.isValid && !user.existingUser) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const { displayName, photoURL, email } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);

          history.replace(from);
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    event.preventDefault();
    event.target.reset();
  }


  return (
    <div className="container d-flex justify-content-center">
      <div className="border border-5 shadow rounded p-3 mb-2 bg-light text-dark" style={{ maxWidth: "300px", textAlign: "center" }} >
        {
          user.isSignedIn && <div>
            <h6>Logged in by : {user.name}</h6>
          </div>
        }
        <h1>Fill the box</h1>

        <form style={{ maxWidth: "300px" }} onSubmit={createAccount}>
          {user.existingUser && <input className="form-control" type="text" onBlur={handleChange} name="name" placeholder="Your Name" required />}
          <br />
          <input className="form-control" type="text" onBlur={handleChange} name="email" placeholder="Your Email" required />
          <br />
          <input className="form-control" type="password" onBlur={handleChange} name="password" placeholder="Your Password" required />
          <br />
          <input type="checkbox" name="switchForm" onChange={switchForm} id="switchForm" />
          <label htmlFor="switchForm"> Create new account</label>
          <br />
          <Link to="/destination">
            <input className="btn-primary mb-1" type="submit" value={user.existingUser ? "create account" : "login"} />
          </Link>

        </form>
        {
          user.error && <p style={{ color: 'red' }}>{user.error}</p>
        }

        {
          user.isSignedIn ? <button className="btn-primary" onClick={handleSignOut} >Sign out</button> :
            <button className="btn-primary" onClick={handleSignIn} >Sign in with google</button>
        }
        <br />
        <button className="btn-primary mt-1" onClick={handleFbSignIn} >Sign in with Facebook</button>


      </div>
    </div>

  );
}

export default Login;

