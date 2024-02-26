import React, { useRef, useState } from "react";
import "./SignupScreen.scss";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";

function SignupScreen() {
  const signUpEmailRef = useRef(null);
  const signUpPasswordRef = useRef(null);
  const signInEmailRef = useRef(null);
  const signInPasswordRef = useRef(null);
  const [signUp, setSignUp] = useState(false);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      signUpEmailRef.current.value,
      signUpPasswordRef.current.value
    )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.code);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      signInEmailRef.current.value,
      signInPasswordRef.current.value
    )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <>
      {signUp === true ? (
        <div className="signup_screen">
          <form>
            <h1>Sign Up</h1>
            <input
              type="email"
              className="email_input"
              placeholder="Email or phone number"
              ref={signUpEmailRef}
            />
            <input
              type="password"
              className="password_input"
              placeholder="Password"
              ref={signUpPasswordRef}
            />
            <button type="submit" className="form_button" onClick={register}>
              Sign Up
            </button>
            <h4>
              Already have an account??{" "}
              <a onClick={() => setSignUp(false)}>Sign in now.</a>
            </h4>
          </form>
        </div>
      ) : (
        <div className="signin_screen">
          <form>
            <h1>Sign In</h1>
            <input
              type="email"
              className="email_input"
              placeholder="Email or phone number"
              ref={signInEmailRef}
            />
            <input
              type="password"
              className="password_input"
              placeholder="Password"
              ref={signInPasswordRef}
            />
            <button type="submit" className="form_button" onClick={signIn}>
              Sign In
            </button>
            <h4>
              New to Netflix?{" "}
              <a onClick={() => setSignUp(true)}>Sign up now.</a>
            </h4>
          </form>
        </div>
      )}
    </>
  );
}

export default SignupScreen;
