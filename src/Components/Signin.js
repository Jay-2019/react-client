import React, { Component, Fragment } from 'react'
import axios from 'axios';

export default class Signin extends Component {

    state = {
        email: '',
        password: '',
    }

    handleEmail = (event) => {
        let { value } = event.target;
        if (value !== '') {
            this.setState({
                email: value
            });
        }
    }

    handlePassword = (event) => {
        let { value } = event.target;
        if (value !== '') {
            this.setState({
                password: value
            });
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();

        axios.get('http://localhost:4000/todos/isUserExist/')
            .then((response) => {
                this.setState({ userProfile: response.data });
            })
            .catch(error => error.message);

        let userEmail = this.state.userProfile.find((data) => {
            return data.email === this.state.email;
        });

        if (userEmail === this.state.email) {
            alert("LogIn Successfull");
        }
        if (userEmail === undefined) {
            alert("Sorry, this user not exist, please signup first");
            return
        }

        // this.setState({
        //     isUserExist: false
        // });
    }


    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <br />
                    <form onSubmit={this.handleSubmit} >
                        <br />
                        <div className="form-group">
                            <input type="email"
                                className="form-control"
                                id="inputEmail"
                                aria-describedby="emailHelp"
                                placeholder=" email ID"
                                required
                                onChange={this.handleEmail}
                                value={this.state.email}
                            />
                        </div>

                        <div className="form-group">
                            <input type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="password"
                                required
                                onChange={this.handlePassword}
                                value={this.state.password}
                            />
                        </div>

                        <br />

                        <button type="submit"
                            value="sign in"
                            className="btn btn-dark">
                            SIGN IN
                        </button>

                    </form>
                </div>
            </Fragment >
        )
    }
}
