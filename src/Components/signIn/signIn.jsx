import React, { Component, Fragment } from "react";
import axios from "axios";

export default class SignIn extends Component {
  state = {
    email: [],
    confirmPassword: [],
    checkEmail: "",
    checkPassword: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/authentication")
      .then(response => {
        console.log(response);
        response.data.map(data => {
          return this.setState({
            email: [...this.state.email, data.email],
            confirmPassword: [
              ...this.state.confirmPassword,
              data.confirmPassword
            ]
          });
        });
      })
      .catch(error => error.message);
  }

  // check valid Email-ID
  checkEmail = () => {
    let email = this.state.email;
    let checkEmail = this.state.checkEmail;

    for (let i of email) {
      if (i === checkEmail ? true : false) return true;
    }
  };
  // check valid PasswordS
  checkPassword = () => {
    let confirmPassword = this.state.confirmPassword;
    let checkPassword = this.state.checkPassword;

    for (let j of confirmPassword) {
      if (j === checkPassword ? true : false) {
        return true;
      }
    }
  };

  handleEmail = event => {
    let { value } = event.target;
    if (value !== "") {
      this.setState({
        checkEmail: value
      });
    }
  };

  handlePassword = event => {
    let { value } = event.target;
    if (value !== "") {
      this.setState({
        checkPassword: value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.checkEmail);
    console.log(this.state.email.map(data => data));
    // console.log(this.state.checkEmail === this.state.email.map(data => data));
    console.log(this.checkEmail());
    console.log(this.checkPassword());
    if (this.checkEmail() && this.checkPassword()) {
      window.alert("Congratulations!!! you are Logged-In");
    } else {
      window.alert(" please!!!  Enter Valid Email-ID & Password");
    }
  };

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <br />
          <form onSubmit={this.handleSubmit}>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder=" email ID"
                required
                onChange={this.handleEmail}
                value={this.state.checkEmail}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="password"
                required
                onChange={this.handlePassword}
                value={this.state.checkPassword}
              />
            </div>

            <br />

            <button type="submit" value="sign in" className="btn btn-dark">
              SIGN IN
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
