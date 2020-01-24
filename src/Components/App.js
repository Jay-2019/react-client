import React from "react";
// import { browserHistory } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "../style/style.module.css";

import AboutTodo from "./aboutTodo";
import CreateTodo from "./createTODO";
import editTodo from "./editTODO";
import deleteTodo from "./deleteTODO";
import TodoList from "./listTODO";
import SignIn from "./signIn";
import SignUp from "./signUp";

import IsIncorrectPassword from "./isIncorrectPassword";
import UserProfile from "./userProfile";

class App extends React.Component {
  state = {
    isSignIn: false,
    loggedInUserData: {}
  }

  getLoggedInUserData = (data) => {
    this.setState({ loggedInUserData: data });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid ">
          <Route exact path="/">
            <AboutTodo />
          </Route>

          <Route exact path="/todoList">
            <TodoList />
          </Route>

          <Route path="/editTodo/:id" component={editTodo} />

          <Route path="/deleteTodo/:id" component={deleteTodo} />

          <Route path="/isIncorrectPassword">
            <IsIncorrectPassword />
          </Route>
          <Route path="/createTodo">
            <CreateTodo />
          </Route>

          <Route path="/signIn">
            <SignIn sendLoggedInUserData={this.getLoggedInUserData} />
          </Route>

          <Route path="/signUp" >
            <SignUp />
          </Route>

          <Route path="/userProfile" >
            <UserProfile />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
