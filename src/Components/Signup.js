import React, { Component, Fragment } from 'react'

export default class Signup extends Component {

    state = {

        userName: '',
        // lastName: '',
        gender: '',
        email: '',
        createPassword: '',
        confirmPassword: '',
        termsAndConditions: 'false',
    }

    handleUserName = (event) => {
        const { value } = event.target;
        if (value.match("^[a-zA-Z ]*$") != null) {
            this.setState({ userName: value });
        }
    }

    handleGender = (event) => {
        const { value, id } = event.target;
        if (value === id) {
            this.setState({ gender: value });
        }
    }

    handleEmail = (event) => {
        const { value } = event.target;
        if (value !== '') {
            this.setState({ email: value });
        }
    }

    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    handleCreatePassword = (event) => {
        const { value } = event.target;
        this.setState({ createPassword: value });

    }

    handleConfirmPassword = (event) => {
        const { value } = event.target;
        this.setState({ confirmPassword: value });
    }
    handleTermsAndConditions = (event) => {
        const { id, name } = event.target;
        if (name === id) {
            this.setState({ termsAndConditions: 'true' });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // send data into database

        this.setState({
            userName: '',
            // lastName: '',
            gender: '',
            email: '',
            createPassword: '',
            confirmPassword: '',
            termsAndConditions: 'false',

        });
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                id="inputuserName"
                                aria-describedby="userNameHelp"
                                placeholder="user_name"
                                value={this.state.userName}
                                onChange={this.handleUserName}
                                required
                            //
                            />
                        </div>

                        <div className="form-group form-check ">
                            <div className="row">
                                <div className="col">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="genderOptions"
                                        id="male"
                                        value="male"
                                        required
                                        // checked={this.state.gender.match('male')}
                                        checked={this.state.gender === 'male'}
                                        onChange={this.handleGender}


                                    />
                                    <label className="form-check-label" >
                                        Male
                                         </label>
                                </div>

                                <div className="col">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="genderOptions"
                                        id="female"
                                        value="female"
                                        required
                                        // checked={this.state.gender.match('female')}
                                        checked={this.state.gender === 'female'}
                                        onChange={this.handleGender}

                                    />
                                    <label className="form-check-label" >
                                        Female
                                         </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="email"
                                className="form-control"
                                id="inputEmail"
                                aria-describedby="emailHelp"
                                placeholder=" email"
                                value={this.state.email}
                                onChange={this.handleEmail}
                                required
                            />
                            <small id="emailHelp"
                                className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>

                        <div className="form-group">
                            <input type="password"
                                className="form-control"
                                id="inputCreatePassword"
                                placeholder="create password"
                                value={this.state.createPassword}
                                onChange={this.handleCreatePassword}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input type="password"
                                className="form-control"
                                id="inputConfirmPassword"
                                placeholder="confirm password"
                                value={this.state.confirmPassword}
                                onChange={this.handleConfirmPassword}
                                required
                            />
                        </div>

                        <div className="form-group form-check">
                            <input type="checkbox"
                                className="form-check-input"
                                id="termsandconditions"
                                name="termsandconditions"
                                value="termsandconditions"
                                // checked={this.state.termsAndConditions.match(true)}
                                checked={this.state.termsAndConditions === 'true'}
                                onChange={this.handleTermsAndConditions}
                                required
                            // 
                            />
                            <label className="form-check-label"
                                htmlFor="termandcondition">
                                I agree to the terms and conditions
                            </label>
                        </div>

                        <button type="submit"
                            value="sign up"
                            className="btn btn-dark">
                            SIGN UP
                        </button>
                    </form>
                </div>
            </Fragment>
        )
    }
}