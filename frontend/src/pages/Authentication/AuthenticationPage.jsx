import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../services/authentication";
import { PasswordValidator } from "../../components/Utilities/PasswordValidator";
import { Header } from "../../components/Header/Header"; //Sam's
import "../../static/AuthenticationPage.css"; //Sam's

export const AuthenticationPage = () => {
  // Defined required states
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userNameLog, setUserNameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();
  // const [isLogin, setIsLogin] = useState(false); //Sam's

  // Handle sign up button on click
  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    if (!isPasswordValid) {
      alert("Please fix the errors in the form");
      return;
    }
    try {
      await signup(fullName, userName, email, password);
      console.log("redirecting...:");
      setIsSignUp(false);
    } catch (err) {
      alert("User with this user name provided already exists");
      window.location.reload();
    }
  };

  // Handle log in button on click
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(userNameLog, passwordLog);
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials and try again.");
      window.location.reload();
    }
  };

  // Handle required fields for sign up & log in
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (newPassword, isValid) => {
    setPassword(newPassword);
    setIsPasswordValid(isValid);
  };

  const handlePasswordLogChange = (event) => {
    setPasswordLog(event.target.value);
  };
  const handleUserNameLogChange = (event) => {
    setUserNameLog(event.target.value);
  };

  // Conditional rendering Sign up & Log in
  return (
    <div className="auth-container">
      <Header className="auth-header" />

      {isSignUp ? (
        <div className={`auth-form ${isSignUp ? "signup" : "login"}`}>
          <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
          <form onSubmit={handleSignUpSubmit}>
            <label htmlFor="fullName">Name:</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
              className="auth-input"
            />
            <label htmlFor="userName">User Name:</label>
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={handleUserNameChange}
              className="auth-input"
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="auth-input"
            />
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <PasswordValidator onPasswordChange={handlePasswordChange} />
            </div>
            <input
              role="submit-button"
              id="submit"
              type="submit"
              value="Submit"
              disabled={!isPasswordValid}
              className="auth-button"
            />
          </form>
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      ) : (
        <div className={`auth-form ${isSignUp ? "signup" : "login"}`}>
          <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="user-name">User Name:</label>
            <input
              id="user-name"
              type="text"
              value={userNameLog}
              onChange={handleUserNameLogChange}
              className="auth-input"
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={passwordLog}
              onChange={handlePasswordLogChange}
              className="auth-input"
            />
            <input
              role="submit-button"
              id="submit"
              type="submit"
              value="Submit"
              className="auth-button"
            />
          </form>
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      )}
    </div>
  );
};
