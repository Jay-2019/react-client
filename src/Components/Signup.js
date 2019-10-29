import React, { Component, Fragment } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <Fragment>
<<<<<<< HEAD
                <div className="container-fluid">
                    <form enctype="multipart/form-data">
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputFirstName" aria-describedby="firstnameHelp" placeholder="first_name" />
=======
                <div className="container-fluid p-3 mb-2  text-dark">
                    <form onSubmit={this.handleSubmit} enctype="multipart/form-data">

                        {/* Set Profile Image */}
                        <div>
                            <ReactAvatar
                                scale={parseFloat(this.state.scale)}
                                width={this.state.width}
                                height={this.state.height}
                                position={this.state.position}
                                onPositionChange={this.handlePositionChange}
                                rotate={parseFloat(this.state.rotate)}
                                borderRadius={this.state.width / (100 / this.state.borderRadius)}
                                border={this.state.border}
                                image={this.state.profileImage}
                                className="editor-canvas"
                            />
                            <br />
                            {/* Profile Image */}
                            <input name="profileImage" type="file" onChange={this.handleProfileImage} required />
                            <br />
                            {/* Zoom &nbsp; */}
                            <input
                                name="scale"
                                type="range"
                                onChange={this.handleScale}
                                min={this.state.allowZoomOut ? '0.1' : '1'}
                                max="2"
                                step="0.01"
                                defaultValue="1"
                            />
>>>>>>> signup_feature
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
