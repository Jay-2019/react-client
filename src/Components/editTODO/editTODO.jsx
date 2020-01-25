import React from "react";
import axios from "axios";
import NavigationBar from "../../components/navigationBar";

class EditTodo extends React.Component {
  state = {
    Description: "",
    Responsible: "",
    Priority: "",
    Completed: false
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("http://localhost:4000/todos/editTodo/" + this.props.match.params.id)
      .then(response => {
        console.log(response);
        this.setState({
          Description: response.data.Description,
          Responsible: response.data.Responsible,
          Priority: response.data.Priority,
          Completed: !response.data.Completed
        });
      })
      .catch(error => console.log(error.message));
    console.log(this.props);
    console.log(this.state.Completed);
  }

  handleDescription = event => {
    this.setState({
      Description: event.target.value
    });
  };

  handleResponsible = event => {
    this.setState({
      Responsible: event.target.value
    });
  };

  handlePriority = event => {
    this.setState({
      Priority: event.target.value
    });
  };

  handleCompleted = event => {
    this.setState({
      Completed: !this.state.Completed
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Create updateTodo Object;
    const updatedTodo = {
      Description: this.state.Description,
      Responsible: this.state.Responsible,
      Priority: this.state.Priority,
      Completed: this.state.Completed
    };
    console.log(updatedTodo);
    axios
      .post(
        "http://localhost:4000/todos/updateTodo/" + this.props.match.params.id,
        updatedTodo
      )
      .then(res => console.log(res.data));

    this.props.history.push("/todoList");
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <h1 align="center">Update TODO</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Description"
              aria-describedby="DescriptionHelp"
              placeholder="Description"
              value={this.state.Description}
              onChange={this.handleDescription}
            />
          </div>
          <br />

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Responsible"
              aria-describedby="ResponsibleHelp"
              placeholder="Responsible"
              value={this.state.Responsible}
              onChange={this.handleResponsible}
            />
          </div>

          <div className="form-group form-check">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="Low Priority"
              value="Low"
              checked={this.state.Priority === "Low"}
              onChange={this.handlePriority}
            />
            <label className="form-check-label">Low Priority</label>
            <br />
            <br />

            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="Medium Priority"
              value="Medium"
              checked={this.state.Priority === "Medium"}
              onChange={this.handlePriority}
            />
            <label className="form-check-label">Medium Priority</label>
            <br />
            <br />

            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="High Priority"
              value="High"
              checked={this.state.Priority === "High"}
              onChange={this.handlePriority}
            />
            <label className="form-check-label">High Priority</label>
            <br />
            <br />

            <input
              className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="completedCheckbox"
              onChange={this.handleCompleted}
              checked={this.state.Completed}
              value={this.state.Completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>
          <button type="submit" value="Create Todo" className="btn btn-dark">
            UPDATE TODO
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default EditTodo;
