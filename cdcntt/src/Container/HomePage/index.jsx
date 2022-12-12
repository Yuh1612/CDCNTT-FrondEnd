import React from "react";

import { Form, Button } from "react-bootstrap";
import { FcBusinesswoman, FcReading } from "react-icons/fc";
import ListTeacher from "../../component/ListGroup";
import TopTeacher from "../../component/TopTeacher";
import "./homePage.css";
function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePageTop">
        <img
          alt=""
          className="imgHomePageTop"
          src="https://static.preply.com/static/ssr/_next/static/images/pre-search-bg-image-0f1c58a027ed60d0afd5da3a263677fd.jpg"
        ></img>
        <h1>Finding a good English Teachers or a teaching job? </h1>
        <p className="PTop">
          Looking for a high-qualitied English teacher? Finding Teacher is the
          top website for you. You can choose from 1000 English teachers with an
          average rating of 4.5 out of 5 stars given by more than 10000 parents
          and schools in VietNam. And if you English teacher having certificate
          and finding a chance to work, it's for you. Finding Teacher has a
          thousand users per day. You will have an offer to teach soon.
        </p>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="btn_search" variant="outline-success">
            Search
          </Button>
        </Form>
      </div>
      <div className="row" id="RowListHomePage">
        <span>
          <h3>English Teacher Available </h3>
        </span>

        <div className="col-2"></div>
        <div className="col-8">
          <ListTeacher />
        </div>
        <div className="col-2"></div>
      </div>
      <div className="styles_BottomDivider__IQbGQ"></div>
      <div className="row" id="TopTeacher">
        <span>
          <h3>Top Teacher rated by parents and schools</h3>
        </span>
        <div className="col-2"></div>
        <div className="col-8">
          <TopTeacher />
        </div>
        <div className="col-2"></div>
      </div>
      <div className="styles_BottomDivider__IQbGQ"></div>

      <div className="row" id="Pricetable">
        <h3 id="Pricetableh3">Why is Finding Teacher is your best choice? </h3>
        <div className="col-6">
          <FcReading className="IconUser" />
          <span>
            <h3>You are students</h3>
          </span>
          <br />
          <span>
            <h4>Find a good Teacher to Help You Master English</h4>
          </span>
          <p>
            Are you trying to become fluent in English?
            <br />
            Do you need to improve your English skills for school, work or
            relocation but lack of an high-qualitied mentor?
            <br />
            Are you finding the best suitable teacher for your level?
            <br />
            With us, you get access to a range of English teacher free
          </p>
          <br />
          <span>
            <h4>All things are clear and fast!</h4>
          </span>
          <p>
            Don't worry about teachers in Finding Teacher are good or not, we
            always have the best teachers for you.
            <br />
            Public information and contact easily to any teacher you want.
            <br />
            <i>Always free!</i>
          </p>
        </div>

        <div className="col-6" id="DiscoverMore">
          <FcBusinesswoman className="IconTeacher" />
          <span>
            <h3>You are teachers</h3>
          </span>
          <br />
          <span>
            <h4>Everyone knows you</h4>
          </span>
          <p>
            All your information you registered will be public on our website. A
            thousand of users can see everyday.
          </p>
          <br />
          <span>
            <h4>Offer anytime, anywhere</h4>
          </span>
          <p>
            You will never spend too much time to find job. Our users will
            contact to you as soon s possible.
          </p>
          <br />
          <span>
            <h4>Reputation and quality</h4>
          </span>
          <p>
            A hundered teachers on Finding Teacher had their own job less than a
            month. All're satified!
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
