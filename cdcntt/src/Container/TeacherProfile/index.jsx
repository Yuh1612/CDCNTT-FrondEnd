import React from "react";
import './index.css';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import ReactStars from 'react-stars'

function TeacherProfile() {
    return (
        <div>
            <div className="test">
                <div className="container">
                    <Image src="https://avatars.preply.com/i/logos/i/logos/avatar_o3nwt6e7s68.jpg?d=160x160&f=webp" className="img" width={220}></Image>
                    <h2>Shannice B.</h2>
                    <h3>English speaker</h3>
                    <ReactStars
                        count={5}
                        size={30}
                        value={3.5}
                        color2={'#ffd700'} />
                    <div className="btn">
                        <Button variant="primary" size="lg">Hire me</Button>
                        <Button variant="primary" size="lg">Message</Button>
                    </div>
                </div>
                <div className="divProfile">
                    <Card style={{ width: '20rem' }}>
                        <Card.Header style={{ fontSize: '30px' }}>Profile</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="textProfile">Phone Number: 0932953823</ListGroup.Item>
                            <ListGroup.Item className="textProfile">Address: United Kingdom</ListGroup.Item>
                            <ListGroup.Item className="textProfile">Email: vudo123@gmail.com</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>

            <div className="backgrond">
                <div className="container2">
                    <h2 className="title">About the tutor</h2>
                    <h3>Hello everyone! My name is Shannice, I am 25 and was born in the countryside of Yorkshire, UK. I have always had a passion for languages, I studied English Language and Spanish at GCSE and A-Level.<br/>
                        When I was 19 I moved to Florence, Italy 🍝 where I decided to take part in the TEFL course. I had many Italian friends that I taught English to as I found it incredibly rewarding to see their progression, it was also great to exchange languages and learn about another culture!<br/>
                        I love exploring the world and meeting local people to travel like a local 🌎 I enjoy being creative, reading and cooking.<br/>
                        I have 6 years of teaching experience and have been awarded with the Accredited Advanced 120 Hour Online TEFL Certificate.<br/>
                        I believe my classes should be the part of your week that you look forward to! Using various teaching techniques to help you absorb and understand the English language at ease. I often use Communicative Language Teaching to help my students in real life situations and to ensure the sessions are more interactive!<br/>
                        I am a compassionate teacher, ready to listen, support and tutor you through fun and insightful lessons. Contact me and we can discuss where to go next!</h3>
                </div>
                <div className="containerReview">
                    <h2 className="title">What students say</h2>
                    <div className="review">
                        <div style={{ marginRight: '2%' }}>
                            <Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1144982182.jpg" className="img" width={110}></Image>
                        </div>
                        <div>
                            <div className="test">
                                <h4>Arthur</h4>
                                <h4 className="textRating">⭐5</h4>
                            </div>
                            <h4 className="textDateRating">November 25, 2022</h4>
                            <h4 className="textReview">Great teacher, very punctual and professional</h4>
                            <div className="review">
                                <div style={{ marginRight: '2%' }}>
                                    <Image src="https://avatars.preply.com/i/logos/i/logos/avatar_o3nwt6e7s68.jpg?d=160x160&f=webp" className="img" width={70}></Image>
                                </div>
                                <div>
                                    <h4>Reply from Shannice</h4>
                                    <h4 className="textDateRating">November 25, 2022</h4>
                                    <h4 className="textReview">Thank you very much Arthur, and thanks for being a wonderful first Preply student!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    )
}

export default TeacherProfile 