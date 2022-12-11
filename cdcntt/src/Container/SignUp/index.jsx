import React from "react";
import './index.css';
import Form from 'react-bootstrap/Form';

function SignUp() {
    return (
        <div className='row' id="Signup-form-container" >
            <div className="col-3"></div>
            <div className="col-6">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Last name"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className="text">Username</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className="text">Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <Form.Group className="mb-3" id="Genderradiobutton">
                            <Form.Label>Sign up as: </Form.Label>
                            <Form.Check inline label="Teacher" name="group1" type='radio' />
                            <Form.Check inline label="Student" name="group1" type='radio' />
                        </Form.Group>
                    <div className="gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            </div>
            <div className="col-3"></div>
           
        </div>
    )
}
export default SignUp 