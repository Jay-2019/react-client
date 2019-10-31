import React from "react";
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
          <Route path="/" exact component={TodoList} />
          <Route path="/EditTodo/:id" component={EditTodo} />
          <Route path="/CreateTodo" component={CreateTodo} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          {/* <Route path="/userProfile" component={UserProfile} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
