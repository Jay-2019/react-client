import React from "react";
// import { browserHistory } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "../style/style.module.css";

import AboutTodo from "./aboutTodo";
import CreateTodo from "./createTODO";
import EditTodo from "./editTODO";
import DeleteTodo from "./deleteTODO";
import TodoList from "./listTODO";
import SignIn from "./signIn";
import SignUp from "./signUp";
import IsIncorrectPassword from "./isIncorrectPassword";
import UserProfile from "./userProfile";
import { string } from "prop-types";

class App extends React.Component {
  state = {
    isSignIn: false,
    _id: string,
    userName: string,
    gender: string,
    email: string,
    createPassword: string,
    confirmPassword: string,
    termsAndConditions: Boolean,
    isUserExist: Boolean,
    signupDate: Date

  }

  getLoggedInUserData = (data) => {
    console.log(data);
    let { _id,
      userName,
      gender,
      email,
      createPassword,
      confirmPassword,
      termsAndConditions,
      isUserExist,
      signupDate } = data;
    console.log(_id);
    this.setState({
      _id,
      userName,
      gender,
      email,
      createPassword,
      confirmPassword,
      termsAndConditions,
      isUserExist,
      signupDate
    });

  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid ">
          <Route exact path="/">
            <AboutTodo />
          </Route>

          <Route path="/signIn" component={(prop) => <SignIn {...prop} sendLoggedInUserData={this.getLoggedInUserData} />} />

          <Route path="/signUp" component={(prop) => <SignUp {...prop} _id={this.state._id} />} />

          <Route path="/isIncorrectPassword" component={(prop) => <IsIncorrectPassword {...prop} />} />

          <Route path="/userProfile" component={(prop) => <UserProfile {...prop} userName={this.state.userName} />} />

          <Route path="/createTodo" component={(prop) => <CreateTodo {...prop} _id={this.state._id} />} />

          <Route exact path="/todoList" render={(prop) => <TodoList {...prop} _id={this.state._id} />} />

          <Route path="/editTodo/:id" component={(prop) => <EditTodo {...prop} _id={this.state._id} />} />

          <Route path="/deleteTodo/:id" component={(prop) => <DeleteTodo  {...prop} />} />

        </div>
      </BrowserRouter >
    );
  }
}

export default App;
