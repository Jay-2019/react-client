import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NavigationBar from "../navigationBar/navigationBar";
// import style from '../style.module.css';
import deleteIcon from "../../assets/trash-2 (1).svg";
import editIcon from "../../assets/edit (1).svg";

const Todo = props => (
  <tr className="table-info">
    <td>{props.todo.Description}</td>
    <td>{props.todo.Responsible}</td>
    <td>{props.todo.Priority}</td>
    <td>{props.todo.Completed === "true" ? "Completed" : "Incomplete"}</td>
    <td>
      <Link to={"/EditTodo/" + props.todo._id}>
        <img src={editIcon} alt="edit icon" />
      </Link>
      &nbsp; &nbsp; &nbsp;
      <Link to={"/DeleteTodo/" + props.todo._id}>
        <img src={deleteIcon} alt="delete icon" />
      </Link>
    </td>
    <td>{new Date(props.todo.updatedAt).toLocaleDateString("en-GB")}</td>
  </tr>
);

class TodoList extends React.Component {
  state = {
    todos: []
    // id: string
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/listTodo/" + this.props._id)
      .then(response => {
        this.setState({ todos: response.data });
        console.log(this.state.todos);
      })
      .catch(error => error.message);
  }

  todoList = () => {
    return this.state.todos.map((currentTodo, index) => {
      return <Todo todo={currentTodo} key={index} check={this.check()} />;
    });
  };

  check = () => {
    const cName = [
      "table-success",
      "table-active",
      "table-primary",
      "table-secondary",
      "table-danger",
      "table-warning",
      "table-info",
      "table-light",
      "table-dark"
    ];
    for (let k of cName) {
      return k;
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <h1> Todo List </h1>
        <p>Refresh for Recent Updates </p>
        <br />
        <table className="table table-hover table-striped table-info">
          <thead>
            <tr className="table-danger">
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default TodoList;
