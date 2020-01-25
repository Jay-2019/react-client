import React, { Component } from "react";
import NavigationBar from "../navigationBar/navigationBar";
import { string } from "prop-types";

export default class UserProfile extends Component {
  state = {
    userName: string
  };

  componentDidMount() {
    this.setState({ userName: this.props.userName });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <h1> Hii, {this.props.userName}</h1>
      </div>
    );
  }
}
