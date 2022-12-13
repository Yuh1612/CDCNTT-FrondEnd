import React from "react";
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css';
export default function UserProfile() {
    return (
        <div className="UserProfile">
            <div className="row" id='RowUserProfile'>
                <div className="col-3"> </div>
                <div className="col-6">
                    <div className='UserAccountForm'>
                        <h4>YOUR PROFILE</h4>
                        <Form >
                            <div className="row" id='FormUserImg'>

                                <img src='https://lh3.googleusercontent.com/a/ALm5wu0dXL3X6-zphMIJINjtnocmJfYwlJy2itj0Anqp_Q=s96-c' alt="UserImage" />
                                <Button variant="btn btn--block btn--success-i" type="button"> Upload image </Button>

                            </div>
                            <FormGroup>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control placeholder="Nguyen Van A" />
                            </FormGroup>

                            <Form.Group className="mb-3" id="Genderradiobutton">
                                <Form.Label>Gender</Form.Label>
                                <Form.Check inline label="Male" name="group1" type='radio' />
                                <Form.Check inline label="Female" name="group1" type='radio' />
                            </Form.Group>


                            <FormGroup className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control />
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="16 Ngo Si Lien, Hoa Khanh Bac, Lien Chieu, Da Nang" />
                            </FormGroup>

                            {/* <Form.Label>City</Form.Label>
                <Form.Control />

                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select> */}

                            <FormGroup className="mb-3" id="FormButtonUser">
                                <Button variant="danger" type="submit"> Delete account </Button>
                                <Button variant="primary" type="submit"> Save setting </Button>
                            </FormGroup>

                        </Form>
                    </div>

                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    )
}