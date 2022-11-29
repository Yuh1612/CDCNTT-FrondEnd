import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './index.css'
function ListTeacher() {
  return (
    <ListGroup as="ul" id='ListGroupTeacher'>
      <ListGroup.Item as='li'>
        <div className="row" id='RowListGroupItem'>
          <div className="col-3">
            <img src="https://avatars.preply.com/i/logos/i/logos/avatar_o3nwt6e7s68.jpg?d=160x160&f=webp"></img>
          </div>
          <div className="col-6">
            <h4> Kathryn L</h4>
            <p>Friendly and calm tutor, certified, educated, and experienced Hi there! I'm Kathryn. I'm from the US, and I recently returned home from Thailand where I was teaching English to young learners. I have my master's degree in TESOL and over four years of teaching experience. Teaching is my passion!
              At this time, I am choosing to shift from classroom teaching to ...
              Why choose Kathryn L.
              "She is so nice and kind. When I speak something, she let me know correctly! "</p>
          </div>
          <div className="col-3">
            <Button>Subcribe class</Button>
            <Button>Hire me</Button>
            <Button>Message</Button>
          </div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as='li'>
        <div className="row" id='RowListGroupItem'>
          <div className="col-3">
            <img src="https://avatars.preply.com/i/logos/i/logos/avatar_o3nwt6e7s68.jpg?d=160x160&f=webp"></img>
          </div>
          <div className="col-6">
            <h4> Kathryn L</h4>
            <p>Friendly and calm tutor, certified, educated, and experienced Hi there! I'm Kathryn. I'm from the US, and I recently returned home from Thailand where I was teaching English to young learners. I have my master's degree in TESOL and over four years of teaching experience. Teaching is my passion!
              At this time, I am choosing to shift from classroom teaching to ...
              Why choose Kathryn L.
              "She is so nice and kind. When I speak something, she let me know correctly! "</p>
          </div>
          <div className="col-3">
            <Button>Subcribe class</Button>
            <Button>Hire me</Button>
            <Button>Message</Button>
          </div>
        </div>
      </ListGroup.Item>

    </ListGroup>
  );
}

export default ListTeacher;