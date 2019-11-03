import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import style from '../style.module.css';
const Todo = props => (
 
      <tr>
        <td>{props.todo.Description}</td>
        <td>{props.todo.Responsible}</td>
        <td>{props.todo.Priority}</td>
        <td>
          <Link to={"/EditTodo/" + props.todo._id}>Edit</Link>
        </td>
      </tr>

);

class TodoList extends React.Component {
  state = {
    todos: []
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
        <h1> TodoList Component</h1>
        <br />
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
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
