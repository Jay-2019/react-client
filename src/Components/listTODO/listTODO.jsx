import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import style from '../style.module.css';
import deleteIcon from "../../assets/trash-2 (1).svg";
import editIcon from "../../assets/edit (1).svg";

const Todo = props => (
  <tr>
    <td>{props.todo.Description}</td>
    <td>{props.todo.Responsible}</td>
    <td>{props.todo.Priority}</td>
    <td>{props.todo.Completed === "true" ? "Yes" : "No"}</td>
    <td>
      <Link to={"/EditTodo/" + props.todo._id}>
        <img src={editIcon} alt="edit icon" />
      </Link>
      &nbsp; &nbsp; &nbsp;
      <Link to={"/DeleteTodo/" + props.todo._id}>
        <img src={deleteIcon} alt="delete icon" />
      </Link>
    </td>
  </tr>
);

class TodoList extends React.Component {
  state = {
    todos: []
  };

  handleDeleteTodo = id => {
    axios
      .post("http://localhost:4000/todos/" + id)
      .then(response => {
        this.setState({});
      })
      .catch(error => console.log(error.message));
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/listTodo")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => error.message);
  }

  todoList = () => {
    return this.state.todos.map((currentTodo, index) => {
      return <Todo todo={currentTodo} key={index} />;
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1> Todo List </h1>
        <br />
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default TodoList;
