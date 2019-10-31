import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import style from '../style.module.css';

const Todo = props => (
  <table className="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">Description</th>
        <th scope="col">Responsible</th>

        <th scope="col">Priority</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* <th scope="row"> {props.todo.Description}</th> */}
        <td>{props.todo.Description}</td>
        <td>{props.todo.Responsible}</td>

        <td>{props.todo.Priority}</td>

        {/* <td className={style.Completed ? 'Completed' : ''}>{props.todo.Description}</td>
                <td className={style.Completed ? 'Completed' : ''}>{props.todo.Responsible}</td>
                <td className={style.Completed ? 'Completed' : ''}>{props.todo.Priority}</td> */}

        <td>
          <Link to={"/EditTodo/" + props.todo._id}>Edit</Link>
        </td>
      </tr>
    </tbody>
  </table>
);

class TodoList extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
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
        {this.todoList()}
      </React.Fragment>
    );
  }
}
export default TodoList;