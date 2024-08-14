import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authentication";
import { PasswordValidator } from "../../components/Utilities/PasswordValidator";

export const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isPasswordValid) {
      alert("Please fix the errors in the form");
      return;
    }
    try {
      await signup(fullName, userName, email, password);
      console.log("redirecting...:");
      navigate("/login");
    } catch (err) {
      alert("User with this user name provided already exists");
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

  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
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
    </>
  );
};
