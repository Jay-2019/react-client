import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './brand.png'

// import Registration from "./Registration";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import TodoList from "./TodoList";
import Signin from './Signin';
import Signup from './Signup';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>

        <div className="container-fluid">

          {/* TO DO NAVIGATION-BAR... */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/" >
              <img src={logo}
                width="63"
                height="62"
                className="d-inline-block align-top"
                alt="todo_app_logo" />

            </a>

            <Link to="/" className="navbar-brand"> <h2>TODO APPLICATION</h2></Link>


            <div className="collpase navbar-collapse ">
              <ul className="navbar-nav  mx-auto">
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

            <div className="collpase navbar-collapse ">
              <ul className="navbar-nav  ml-auto">
                <li className="navbar-item">
                  <Link to="/sign_in" className="nav-link">SIGN IN</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/sign_up" className="nav-link">SIGN UP </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={TodoList} />
          <Route path="/EditTodo/:id" component={EditTodo} />
          <Route path="/CreateTodo" component={CreateTodo} />
          <Route path="/sign_in" component={Signin} />
          <Route path="/sign_up" component={Signup} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;