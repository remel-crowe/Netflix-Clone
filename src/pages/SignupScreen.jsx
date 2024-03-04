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
  const signUpConfirmPasswordRef = useRef(null);
  const signInEmailRef = useRef(null);
  const signInPasswordRef = useRef(null);
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (
      signUpPasswordRef.current.value !== signUpConfirmPasswordRef.current.value
    ) {
      setError("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      signUpEmailRef.current.value,
      signUpPasswordRef.current.value
    ).catch((error) => {
      setError(error.code);
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      signInEmailRef.current.value,
      signInPasswordRef.current.value
    ).catch((error) => {
      setError(error.code);
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
              placeholder="Use a fake email here"
              ref={signUpEmailRef}
            />
            <input
              type="password"
              className="password_input"
              placeholder="Use a fake password here"
              ref={signUpPasswordRef}
            />
            <input
              type="password"
              className="password_input"
              placeholder="Use the fake password here too"
              ref={signUpConfirmPasswordRef}
            />
            {error && <p className="error_message">{error}!</p>}
            <button type="submit" className="form_button" onClick={register}>
              Sign Up
            </button>
            <h4>
              Already have an account?{" "}
              <a
                onClick={() => {
                  setError("");
                  setSignUp(false);
                }}
              >
                Sign in now.
              </a>
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
              placeholder="Use a fake email here"
              ref={signInEmailRef}
            />
            <input
              type="password"
              className="password_input"
              placeholder="Use a fake password here"
              ref={signInPasswordRef}
            />
            {error && <p className="error_message">{error}</p>}
            <button type="submit" className="form_button" onClick={signIn}>
              Sign In
            </button>
            <h4>
              New to Netflix?{" "}
              <a
                onClick={() => {
                  setError("");
                  setSignUp(true);
                }}
              >
                Sign up now.
              </a>
            </h4>
          </form>
        </div>
      )}
    </>
  );
}

export default SignupScreen;
