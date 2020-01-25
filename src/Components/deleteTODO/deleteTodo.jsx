import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
        this.setState({
          alertMessage: "TODO Deleted Successfully"
        });
      })
      .catch(error => console.log(error.message));
  }
  render() {
    return (
      <div className="container-fluid ">
        <br /> <br />
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <h1>{this.state.alertMessage}</h1>
          <hr />
          <h3 className="mb-0">
            <Link to={"/todoList"}> Go Back To Your TODO List.</Link>
          </h3>
        </div>
      </div>
    );
  }
}
