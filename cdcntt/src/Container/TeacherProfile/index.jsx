import React, { useEffect, useState } from "react";
import "./index.css";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ReactStars from "react-stars";
import api from "../../api/ApiFunction";
import { useParams } from "react-router-dom";

function TeacherProfile() {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState({});
  const [reviews, setReviews] = useState([]);
  console.log(localStorage.getItem("user"));
  const [comment, setComment] = React.useState({
    id_Teacher: teacherId,
    id_Student: "",
    raiting: 1,
    comment: "",
  });

  useEffect(() => {
    const getTeacher = async () => {
      const res = await api.getTeacher(teacherId);
      setTeacher(res.teacher[0]);
    };
    const getReviews = async () => {
      const res = await api.getRaitings(teacherId);
      setReviews(res.ratings);
    };

    getTeacher();
    getReviews();
  }, []);
  const handleSubmitComment = async () => {
    await api.createRaiting(comment);
    setComment({
      id_Teacher: teacherId,
      id_Student: "",
      raiting: 1,
      comment: "",
    });
  };
  return (
    <div>
      <div className="test">
        <div className="container">
          <Image
            src="https://avatars.preply.com/i/logos/i/logos/avatar_o3nwt6e7s68.jpg?d=160x160&f=webp"
            className="img"
            width={220}
          ></Image>
          <h2>
            {teacher.lastName} {teacher.firstName}
          </h2>
          <h3>English speaker</h3>
          <ReactStars
            count={5}
            size={30}
            value={teacher.rating}
            color2={"#ffd700"}
          />
          <div className="btn">
            <Button variant="primary" size="lg">
              Hire me
            </Button>
            <Button variant="primary" size="lg">
              Message
            </Button>
          </div>
        </div>
        <div className="divProfile">
          <Card style={{ width: "20rem" }}>
            <Card.Header style={{ fontSize: "30px" }}>Profile</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="textProfile">
                Phone Number: {teacher.phone}
              </ListGroup.Item>
              <ListGroup.Item className="textProfile">
                Address: {teacher.address}
              </ListGroup.Item>
              <ListGroup.Item className="textProfile">
                Cetificate: {teacher.cetificate}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>

      <div className="backgrond">
        <div className="container2">
          <h2 className="title">About the tutor</h2>
          <h3>
            Hello everyone! My name is {teacher.lastName} {teacher.firstName}, I
            am 25 and was born in the countryside of Yorkshire, UK. I have
            always had a passion for languages, I studied English Language and
            Spanish at GCSE and A-Level.
            <br />
            When I was 19 I moved to Florence, Italy 🍝 where I decided to take
            part in the TEFL course. I had many Italian friends that I taught
            English to as I found it incredibly rewarding to see their
            progression, it was also great to exchange languages and learn about
            another culture!
            <br />
            I love exploring the world and meeting local people to travel like a
            local 🌎 I enjoy being creative, reading and cooking.
            <br />I have {teacher.experience} years of teaching experience and
            have a {teacher.dregree} degree in English.
            <br />
            I believe my classes should be the part of your week that you look
            forward to! Using various teaching techniques to help you absorb and
            understand the English language at ease. I often use Communicative
            Language Teaching to help my students in real life situations and to
            ensure the sessions are more interactive!
            <br />I am a compassionate teacher, ready to listen, support and
            tutor you through fun and insightful lessons. Contact me and we can
            discuss where to go next!
          </h3>
        </div>
        <div className="containerReview">
          <h2 className="title">What students say</h2>
          <div>
            {reviews?.map((review, index) => {
              return (
                <div className="mb-3" key={index}>
                  <div style={{ marginRight: "2%" }}>
                    <Image
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg"
                      className="img"
                      width={110}
                    ></Image>
                  </div>
                  <div>
                    <div className="test">
                      <h4>
                        {review.StudentRating.lastName}{" "}
                        {review.StudentRating.firstName}
                      </h4>
                      <h4 className="textRating">⭐{review.rating}</h4>
                    </div>
                    <h4 className="textDateRating">
                      {new Date(
                        review.createdAt.toString()
                      ).toLocaleDateString()}
                    </h4>
                    <h4 className="textReview">{review.comment}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container2">
        <h2 className="title">Comment</h2>
        <ReactStars
          count={5}
          size={30}
          value={comment.raiting}
          color2={"#ffd700"}
          onChange={(e) => setComment({ ...comment, raiting: e })}
        />
        <input
          type="search"
          placeholder="Please note a comment..."
          style={{ width: "900px", height: "60px" }}
          value={comment.comment}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        />
        <Button className="btn_search" onClick={handleSubmitComment}>
          Submit
        </Button>
      </div>
      <div className="container2">
        <h2 className="title">Resume</h2>
        <h3>Certified tutor and native English speaker.</h3>
      </div>
      <div className="container2">
        <h2 className="title">Subjects</h2>
        <h3>Certified tutor and native English speaker.</h3>
      </div>
    </div>
  );
}

export default TeacherProfile;
