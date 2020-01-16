import React from "react";
// import { browserHistory } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "../style/style.module.css";
// import UserProfile from './UserProfile';

import CreateTodo from "./createTODO";
import EditTodo from "./editTODO";
import DeleteTodo from "./deleteTODO";
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

          <Route path="/EditTodo/:id" component={EditTodo} />

          {/* <Route path="/EditTodo/:id">
           <EditTodo />
          </Route> */}

          <Route path="/DeleteTodo/:id" component={DeleteTodo} />

          <Route path="/CreateTodo">
            <CreateTodo />
          </Route>

          <Route path="/SignIn">
            <SignIn />
          </Route>

          <Route path="/SignUp" >
            <SignUp />
          </Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
