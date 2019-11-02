import React from "react";
// import { browserHistory } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "../style/style.module.css";
// import UserProfile from './UserProfile';

import CreateTodo from "./createTODO";
import EditTodo from "./editTODO";
import TodoList from "./listTODO";
import SignIn from "./signIn";
import SignUp from "./signUp";
import NavigationBar from "./navigationBar";
// import UserProfile from './userProfile';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid ">
          {/* TODO NAVIGATION-BAR... */}
          <NavigationBar />
          {/* <br /> */}

          <Route exact path="/">
            <TodoList />
          </Route>

          <Route path="/EditTodo/:id">
            <EditTodo />
          </Route>

          <Route path="/CreateTodo">
            <CreateTodo />
          </Route>

          <Route path="/sign_in">
            <SignIn />
          </Route>

          <Route path="/sign_up" >
            <SignUp />
          </Route>
          {/* <Route path="/userProfile" >
            <UserProfile />
        </Route>*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
