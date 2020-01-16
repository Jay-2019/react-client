import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class DeleteTodo extends Component {
  state = {
    alertMessage: ""
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/todos/deleteTodo/" + this.props.match.params.id
      )
      .then(response => {
        console.log(response.message);
        this.setState({
          alertMessage: "TODO Deleted Successfully"
        });
      })
      .catch(error => console.log(error.message));
  }
  render() {
    return (
      <>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <h1>{this.state.alertMessage}</h1>
          <hr />
          <p className="mb-0">Go Back To The Main Menu.</p>
        </div>
      </>
    );
  }
}
