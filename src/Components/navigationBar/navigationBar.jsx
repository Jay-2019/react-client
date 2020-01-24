import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/brand.png";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* TO DO NAVIGATION-BAR... */}
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              width="63"
              height="62"
              className="d-inline-block align-top"
              alt="todo_app_logo"
            />
          </a>
          <a className="navbar-brand" href="/">
            <>MY TODO</>
          </a>
          {/* <Link to="/" className="navbar-brand">
            <h2 className="navbar-brand">TODO APPLICATION</h2>
          </Link> */}

          <div className="collapse  navbar-collapse ">
            <ul className="navbar-nav  mx-auto">
              <li className="navbar-item">
                <Link to="/todoList" className="nav-link">
                  |TODO|{" "}
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/createTodo" className="nav-link">
                  |CREATE TODO|{" "}
                </Link>
              </li>
              {/* <li className="navbar-item">
                  <Link to="/editTodo" className="nav-link">|EDIT TODO| </Link>
                </li> */}
            </ul>
          </div>

          <div className="collapse  navbar-collapse ">
            <ul className="navbar-nav  ml-auto">
              <li className="navbar-item">
                <Link to="/signOut" className="nav-link">
                  SIGN OUT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
