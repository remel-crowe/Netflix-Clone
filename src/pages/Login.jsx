import React, { useState } from "react";
import "./Login.scss";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="signinScreen">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix login_background"
        />
        <button className="login_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login_gradient"></div>
      </div>

      <div className="login_body">
        {!signIn ? (
          <div className="login_contents">
            <h1>Unlimited films, TV programmes and more</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input
                  className="login_email"
                  type="email"
                  placeholder="Email address"
                />
                <button onClick={() => setSignIn(true)}>Get Started</button>
              </form>
            </div>
          </div>
        ) : (
          <SignupScreen />
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
