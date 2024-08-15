import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../services/authentication";
import { PasswordValidator } from "../../components/Utilities/PasswordValidator";

export const AuthenticationPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userNameLog, setUserNameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

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

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(userNameLog, passwordLog);
      localStorage.setItem("token", token);
      navigate("/posts");
    } catch (err) {
      console.error(err);
      console.log("HERE!!!!!" + err);
      alert("Login failed. Please check your credentials and try again.");
      window.location.reload();
    }
  };

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

  return (
    <>
      <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
      {isSignUp ? (
        <form onSubmit={handleSignUpSubmit}>
          <label htmlFor="fullName">Name:</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <label htmlFor="userName">User Name:</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={handleUserNameChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
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
          />
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="user-name">User Name:</label>
          <input
            id="user-name"
            type="text"
            value={userNameLog}
            onChange={handleUserNameLogChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={passwordLog}
            onChange={handlePasswordLogChange}
          />
          <input
            role="submit-button"
            id="submit"
            type="submit"
            value="Submit"
          />
        </form>
      )}
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? "Already have an account? Log In"
          : "Don't have an account? Sign Up"}
      </button>
    </>
  );
};
//     </>
//   );
// };
