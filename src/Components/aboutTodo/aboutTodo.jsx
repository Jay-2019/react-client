import React, { Component } from "react";
import leftWelcome from "../../assets/welcome-left.png";
import rightWelcome from "../../assets/welcome-right.png";
import brand from "../../assets/brand.png";
import style from "../../style/style.module.css";
export default class AboutTodo extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <br />

        <div className="row align-items-center">
          <div className="col col-md-4 col-sm-4 col-lg-4">
            <img
              src={leftWelcome}
              className={`rounded float-left ${style.welcomeLeft}`}
              alt="leftWelcome"
            />
          </div>

          <div className=" text-center ">
            <img
              src={brand}
              className={`rounded  ${style.welcomeCenter}`}
              alt="rightWelcome"
            />
            <h2 className={style.myTodo}>{"MY TODO"}</h2> <br />
            <h3 className={style.toDoGivesYouFocus}>
              {"To Do gives you focus"}
            </h3>
            <br />
            <h3 className={style.fromWorkToPlay}>{"from work to play."}</h3>
            <br />
            <a className="btn btn-outline-dark" href="/signIn" role="button">
              Get Started
            </a>
          </div>

          <div className="col col-md-4 col-sm-4 col-lg-4">
            <img
              src={rightWelcome}
              className={`rounded float-right ${style.welcomeRight}`}
              alt="rightWelcome"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
