import React from "react";
import "./SignupScreen.scss";
function SignupScreen() {
  const register = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="signin_screen">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            className="email_input"
            placeholder="Email or phone number"
          />
          <input
            type="password"
            className="password_input"
            placeholder="Password"
          />
          <button type="submit" className="form_button">
            Sign In
          </button>
          <h4>
            New to Netflix? <a onClick={register}>Sign up now.</a>
          </h4>
        </form>
      </div>
    </>
  );
}

export default SignupScreen;
