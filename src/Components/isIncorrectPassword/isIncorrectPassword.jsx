import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class IsIncorrectPassword extends Component {
  state = {
    alertMessage: "Create Password & Confirm Password Not Matched "
  };
  render() {
    return (
      <div className="container-fluid ">
        <br /> <br />
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <h1>{this.state.alertMessage}</h1>
          <hr />
          <h3 className="mb-0">
            <Link to={"/signUp"}> Please Try Again.</Link>
          </h3>
        </div>
      </div>
    );
  }
}
