import React from "react";

import { Form, Button } from "react-bootstrap";
import ListTeacher from "../ListGroup";
import './homePage.css';
function HomePage() {
    return (
        <div className="HomePage">
            <div className="HomePageTop">
                <img className="imgHomePageTop" src="https://static.preply.com/static/ssr/_next/static/images/pre-search-bg-image-0f1c58a027ed60d0afd5da3a263677fd.jpg"></img>
                <h1>Online English tutorials and teachers? </h1>
                <p className="PTop">Looking for an online English tutor?
                    Preply is the leading online language learning platform worldwide.
                    You can choose from 12060 English teachers with an average rating of 4.9 out of 5 stars given by 102083 customers.
                    Book a lesson with a private English teacher today and start learning.
                    Not entirely happy with your tutor?
                    No worries, Preply offers free tutor replacement till you're 100% satisfied.
                </p>

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button className="btn_search" variant="outline-success">Search</Button>
                </Form>

            </div>
            <div className="row" id='RowListHomePage'>
                <div className="col-2"></div>
                <div className="col-8">
                    <ListTeacher />
                </div>
                <div className="col-2"></div>
            </div>

        </div>

    )
}
export default HomePage