import React, { Component, Fragment } from "react";
import axios from "axios";
// import style from '../style.module.css';
import defaultImage from "../../assets/Avatar.jpg";
import ReactAvatar from "react-avatar-editor";
import { Redirect } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    userName: "",
    gender: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
    termsAndConditions: false,
    isUserExist: false,
    toSignIn: false,
    isIncorrectPassword: false,

    // Avatar Properties
    profileImage: defaultImage,
    allowZoomOut: true,
    position: { x: 0.5, y: 0.5 },
    scale: 0.9,
    rotate: 0,
    borderRadius: 0,
    preview: null,
    width: 160,
    height: 160,
    border: 5
  };

  handlePositionChange = position => {
    this.setState({ position });
  };
  handleProfileImage = event => {
    let { files } = event.target;
    this.setState({ profileImage: files[0] });
  };
  handleScale = event => {
    const scale = parseFloat(event.target.value);
    this.setState({ scale });
  };

  handleUserName = event => {
    const { value } = event.target;
    if (value.match("^[a-zA-Z ]*$") != null) {
      this.setState({ userName: value });
    }
  };

  handleGender = event => {
    const { value, id } = event.target;
    if (value === id) {
      this.setState({ gender: value });
    }
  };

  handleEmail = event => {
    const { value } = event.target;
    if (value !== "") {
      this.setState({ email: value });
    }
  };

  // "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
  handleCreatePassword = event => {
    const { value } = event.target;
    this.setState({ createPassword: value });
  };

  handleConfirmPassword = event => {
    const { value } = event.target;
    this.setState({ confirmPassword: value });
  };
  handleTermsAndConditions = event => {
    const { id, name } = event.target;
    if (name === id) {
      this.setState({ termsAndConditions: !this.state.termsAndConditions });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.createPassword !== this.state.confirmPassword) {
      window.alert("Create & Confirm Password not Matched");

      // return this.setState({ isIncorrectPassword: true });
    }

    // Creating newUser OBject...
    const newUser = {
      profileImage: this.state.profileImage,
      userName: this.state.userName,
      gender: this.state.gender,
      email: this.state.email,
      createPassword: this.state.createPassword,
      confirmPassword: this.state.confirmPassword,
      termsAndConditions: this.state.termsAndConditions,
      isUserExist: true,
      toSignIn: true
    };

    // send data into database
    axios
      .post("http://localhost:4000/todos/signUp", newUser)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => error.message);

    this.setState({
      userName: "",
      gender: "",
      email: "",
      createPassword: "",
      confirmPassword: "",
      termsAndConditions: false,
      profileImage: defaultImage,
      signUpDate: Date.now,
      isUserExist: false,
      toSignIn: true
    });
  };

  render() {
    if (this.state.toSignIn) {
      return <Redirect to="/signIn" />;
    }

    // if (this.isIncorrectPassword) {
    //   return <Redirect to="/isIncorrectPassword" />;
    // }

    return (
      <Fragment>
        <div className="container-fluid p-3 mb-2  text-dark">
          <form onSubmit={this.handleSubmit}>
            {/* Set Profile Image */}
            <div>
              <ReactAvatar
                scale={parseFloat(this.state.scale)}
                width={this.state.width}
                height={this.state.height}
                position={this.state.position}
                onPositionChange={this.handlePositionChange}
                rotate={parseFloat(this.state.rotate)}
                borderRadius={
                  this.state.width / (100 / this.state.borderRadius)
                }
                border={this.state.border}
                image={this.state.profileImage}
                className="editor-canvas"
              />
              <br />
              {/* Profile Image */}
              <input
                name="profileImage"
                type="file"
                onChange={this.handleProfileImage}
                required
              />
              <br />
              {/* Zoom IN/Out */}
              <input
                name="scale"
                type="range"
                onChange={this.handleScale}
                min={this.state.allowZoomOut ? "0.1" : "1"}
                max="2"
                step="0.01"
                defaultValue="1"
              />
            </div>

            <br />

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputUserName"
                aria-describedby="userNameHelp"
                placeholder="user_name"
                value={this.state.userName}
                onChange={this.handleUserName}
                required
                //
              />
            </div>

            <div className="form-group form-check ">
              <div className="row">
                <div className="col">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    id="male"
                    value="male"
                    required
                    // checked={this.state.gender.match('male')}
                    checked={this.state.gender === "male"}
                    onChange={this.handleGender}
                  />
                  <label className="form-check-label">Male</label>
                </div>

                <div className="col">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    id="female"
                    value="female"
                    required
                    // checked={this.state.gender.match('female')}
                    checked={this.state.gender === "female"}
                    onChange={this.handleGender}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
            </div>

            <div className="form-group ">
              <input
                type="email"
                className="form-control "
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder=" email"
                value={this.state.email}
                onChange={this.handleEmail}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputCreatePassword"
                placeholder="create password"
                value={this.state.createPassword}
                onChange={this.handleCreatePassword}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputConfirmPassword"
                placeholder="confirm password"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPassword}
                required
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="termsAndConditions"
                name="termsAndConditions"
                value="termsAndConditions"
                // checked={this.state.termsAndConditions.match(true)}
                checked={this.state.termsAndConditions === true}
                onChange={this.handleTermsAndConditions}
                required
                //
              />
              <label className="form-check-label" htmlFor="termsAndCondition">
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              value="sign up"
              className="btn btn-dark btn-lg btn-block"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
