import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class CreateTodo extends React.Component {
  state = {
    Description: "",
    Responsible: "",
    Priority: "",
    Completed: "false"
  };

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

  handleSubmit = event => {
    event.preventDefault();
    if (document.getElementById("Description").value === "") {
      alert("enter ToDo Description");
      return;
    } else if (document.getElementById("Responsible").value === "") {
      alert("enter ToDo Responsible");
      return;
    } else {
      // Creating NewToDo OBject...
      const newTodo = {
        Description: this.state.Description,
        Responsible: this.state.Responsible,
        Completed: this.state.Completed,
        Priority: this.state.Priority
      };

      axios.post("http://localhost:4000/todos/add", newTodo).then(response => {
        console.log(response.data);
        return response.data;
      });

      this.setState({
        Description: "",
        Responsible: "",
        Priority: "",
        Completed: "false"
      });
    }

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.Description}`);
    console.log(`Todo Responsible: ${this.state.Responsible}`);
    console.log(`Todo Priority: ${this.state.Priority}`);
    console.log(`Todo Completed: ${this.state.Completed}`);
  };

  render() {
    return (
      <React.Fragment>
        {/* TO DO FORM... */}
        <br />
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
          </div>

          <button type="submit" value="Create Todo" className="btn btn-dark">
            CREATE TODO
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default CreateTodo;
