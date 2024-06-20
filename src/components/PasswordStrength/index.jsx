import React, { useEffect, useState } from "react";
import "./style.css";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(0);
  const [resultTrue, setResultTrue] = useState({});
  console.log(password.length < 35);
  const passwordHandler = (e) => {
    const inputPassword = e.target.value;
    if (inputPassword.length <= 35) {
      setPassword(inputPassword);
    }
  };
  function checkStringComponents(input) {
    // Regular expressions for each condition
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]+/;
    const hasLowercase = /[a-z]/;
    const hasUppercase = /[A-Z]/;

    // Check each condition
    const containsNumber = hasNumber.test(input);
    const containsSpecialChar = hasSpecialChar.test(input);
    const containsLowercase = hasLowercase.test(input);
    const containsUppercase = hasUppercase.test(input);

    // Return an object with each condition's result
    return {
      containsNumber: containsNumber,
      containsSpecialChar: containsSpecialChar,
      containsLowercase: containsLowercase,
      containsUppercase: containsUppercase,
    };
  }

  useEffect(() => {
    // You can add logic here to update progress based on password strength
    let strength = 0;
    const result = checkStringComponents(password);
    setResultTrue(result);
    if (result.containsLowercase) strength += 0.5;
    if (result.containsUppercase) strength += 0.5;
    if (result.containsSpecialChar) strength += 0.5;
    if (result.containsNumber) strength += 0.5;
    if (password.length > 10) {
      strength += 1;
    }
    if (password.length > 18) {
      strength += 1;
    }
    setProgress((strength / 4) * 100);
  }, [password]);
  console.log(resultTrue);

  return (
    <div className="password-main-container">
      <div className="password-input">
        <input
          onChange={passwordHandler}
          type="text"
          placeholder="Enter your Password"
          value={password}
        />
        <div className="checker-text">
          <span className={/[a-z]/.test(password) ? "activeLowerCase" : ""}>
            LowerCase
          </span>
          <span className={/[A-Z]/.test(password) ? "activeUpperCase" : ""}>
            Uppercase
          </span>
          <span className={/\d/.test(password) ? "activeNum" : ""}>Number</span>
          <span
            className={
              /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]+/.test(password)
                ? "activeSym"
                : ""
            }
          >
            Symbols
          </span>
        </div>
      </div>
      <div className="password-progress-container">
        <div
          className="password-progress-bar"
          style={{
            width: `${progress}%`,
            backgroundColor:
              progress < 20
                ? "gray"
                : progress < 40
                ? "yellow"
                : progress < 60
                ? "#0084ff"
                : "green",
          }}
        ></div>
      </div>
      <div className="password-char">
        {password.length < 35 ? (
          <p>Password has {password.length} chars</p>
        ) : (
          <p>Password has limit Exceed</p>
        )}

        <p>
          Your password is{" "}
          {progress < 30 || progress < 80
            ? "Weak"
            : password.length > 12
            ? "medium"
            : resultTrue.containsLowercase &&
              resultTrue.containsNumber &&
              resultTrue.containsSpecialChar &&
              resultTrue.containsUppercase
            ? "strong"
            : ""}
        </p>
      </div>
    </div>
  );
};

export default PasswordStrength;
