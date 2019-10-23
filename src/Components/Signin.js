import React, { Component, Fragment } from 'react'

export default class Signin extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder=" email" />
                        </div>
                        
                        <div className="form-group">
                            <input type="password" className="form-control" id="inputConfirmPassword" placeholder="confirm password" />
                        </div>
                        <br /> <br />

                        <button type="submit" value="sign in" className="btn btn-dark"> SIGN IN </button>
                    </form>
                </div>
            </Fragment>
        )
    }
}
