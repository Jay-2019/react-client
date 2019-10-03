import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './brand.png'

import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import TodoList from "./TodoList";

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>

        <div className="container-fluid">

          {/* TO DO NAVIGATION-BAR... */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/" >
              <img src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="todo_app_logo" />

            </a>
            <Link to="/" className="navbar-brand">TODO APPLICATION</Link>


            &nbsp;
            &nbsp;      &nbsp;      &nbsp;      &nbsp;      &nbsp;     &nbsp;     &nbsp;      &nbsp;
             &nbsp;
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">|TODO| </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/CreateTodo" className="nav-link">|CREATE TODO| </Link>
                </li>
                {/* <li className="navbar-item">
                  <Link to="/EditTodo" className="nav-link">|EDIT TODO| </Link>
                </li> */}
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={TodoList} />
          <Route path="/EditTodo/:id" component={EditTodo} />
          <Route path="/CreateTodo" component={CreateTodo} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;