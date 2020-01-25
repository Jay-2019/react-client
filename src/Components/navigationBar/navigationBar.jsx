import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/brand.png";
import myProfileIcon from "../../assets/user-check.svg";
import createTodo from "../../assets/file-plus.svg";
import todoList from "../../assets/book-open.svg";
import signOutIcon from "../../assets/log-out.svg";
import style from "../../style/style.module.css";

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

          <div className={`collapse  navbar-collapse ${style.navIcons} `}>
            <ul className="navbar-nav  mx-auto">
              &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/userProfile" className="nav-link">
                  <img src={myProfileIcon} alt="myProfileIcon" />
                </Link>
              </li>
              &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/todoList" className="nav-link">
                  <img src={todoList} alt="todoList" />
                </Link>
              </li>
              &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/createTodo" className="nav-link">
                  <img src={createTodo} alt="createTodo" />
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
                <Link to="/" className="nav-link">
                  <img src={signOutIcon} alt="signOutIcon" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
