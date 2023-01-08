import React, { Component } from "react";
import classNames from "classnames";
import styles from "./SignUpForm.module.css";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  isAgree: false,
};
const LOGIN_FORM_REX_EXP = {
  userName: /^(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
  passwordConfirmation:
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
  isAgree: /^(true)$/,
};

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: INITIAL_VALUES.userName,
      isUserNameValid: false,
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
      showPassword: false,
      passwordConfirmation: INITIAL_VALUES.passwordConfirmation,
      isPasswordConfirmationValid: false,
      showPasswordConfirmation: false,
      isAgree: false,
      isIsAgreeValid: false,
    };
  }

  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      ["is" + this.capitalize(name) + "Valid"]:
        LOGIN_FORM_REX_EXP[name].test(value),
    });
    console.log("object :>> ", {
      [name]: value,
      ["is" + this.capitalize(name) + "Valid"]:
        LOGIN_FORM_REX_EXP[name].test(value),
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    // send request
    //this.setState(INITIAL_VALUES);
  };

  render() {
    const {
      userName,
      isUserNameValid,
      email,
      isEmailValid,
      password,
      isPasswordValid,
      passwordConfirmation,
      isPasswordConfirmationValid,
      isAgree,
      isIsAgreeValid,
      showPassword,
      showPasswordConfirmation,
    } = this.state;

    const userNameClassName = classNames(styles.input, {
      [styles.inputValid]: isUserNameValid,
      [styles.inputInvalid]: !isUserNameValid,
    });

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid,
    });

    const passwordConfirmationClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordConfirmationValid,
      [styles.inputInvalid]: !isPasswordConfirmationValid,
    });

    const checkboxClassName = classNames(styles.input, {
      [styles.inputValid]: isIsAgreeValid,
      [styles.inputInvalid]: !isIsAgreeValid,
    });

    return (
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>Create you account</h1>
        <form className={styles.loginForm} onSubmit={this.handleSignUp}>
          <label className={styles.label}>
            <span className={styles.inputName}>User name</span>
            <input
              className={userNameClassName}
              type="userName"
              name="userName"
              placeholder="name"
              value={userName}
              onChange={this.handleInputChange}
              autoFocus
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Email</span>
            <input
              className={emailClassName}
              type="email"
              name="email"
              placeholder="your@mail"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <input
              className={passwordClassName}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password confirmation</span>
            <input
              className={passwordConfirmationClassName}
              type={showPasswordConfirmation ? "text" : "password"}
              name="passwordConfirmation"
              placeholder="password confirmation"
              value={passwordConfirmation}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label}>
            <input
              className={checkboxClassName}
              type="checkbox"
              name="isAgree"
              checked={isAgree}
              onChange={this.handleInputChange}
            />
            I agree
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
