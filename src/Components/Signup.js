import React, { Component, Fragment } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputFirstName" aria-describedby="firstnameHelp" placeholder="first_name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputLastName" aria-describedby="lastnameHelp" placeholder="last_name" />
                        </div>

                        <div className="form-group form-check ">
                            <div className="row">
                                <div className="col">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="genderOptions"
                                        id="male"
                                        value="male"
                                    // checked={this.state.gender === 'male'}
                                    // onChange={this.handleGender} 
                                    />
                                    <label className="form-check-label" > Male</label>
                                </div>

                                <div className="col">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="genderOptions"
                                        id="female"
                                        value="female"
                                    // checked={this.state.gender === 'female'}
                                    // onChange={this.handleGender} 
                                    />
                                    <label className="form-check-label" > Female</label>
                                </div>
                            </div>
                        </div>

                        {/* <div className="form-group form-check">
                            <input className="form-check-input"
                                type="radio"
                                name="genderOptions"
                                id="female"
                                value="female"
                                // checked={this.state.gender === 'female'}
                                // onChange={this.handleGender} 
                                />
                            <label className="form-check-label" > Female</label>
                          
                        </div> */}


                        <div className="form-group">
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder=" email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="inputCreatePassword" placeholder="create password" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="inputConfirmPassword" placeholder="confirm password" />
                        </div>

                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="termandcondition" />
                            <label className="form-check-label" htmlfor="termandcondition">I agree to the terms and conditions</label>
                        </div>                {/* I agree to the terms and conditions */}
                        <button type="submit" value="sign up" className="btn btn-dark"> SIGN UP </button>
                    </form>
                </div>
            </Fragment>
        )
    }
}
