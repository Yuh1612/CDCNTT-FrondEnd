import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
import "./index.css";
function ListTeacher(availableTeachers) {
  return (
    <>
      {availableTeachers?.availableTeachers?.map((teacher, index) => {
        return (
          <ListGroup as="ul" id="ListGroupTeacher">
            <ListGroup.Item as="li">
              <div className="row" id="RowListGroupItem">
                <div className="col-3">
                  <img
                    alt=""
                    src="https://avatars.preply.com/i/logos/i/logos/avatar_o3nwt6e7s68.jpg?d=160x160&f=webp"
                  ></img>
                </div>
                <div className="col-6">
                  <h4>
                    {teacher.lastName} {teacher.firstName}
                  </h4>

                  <p>
                    - <strong>Phone</strong>: {teacher.phone}
                  </p>
                  <p>
                    - <strong>Experience</strong>: {teacher.experience} years
                  </p>
                  <p>
                    - <strong>Degree</strong>: {teacher.dregree}
                  </p>
                  <p>
                    - <strong>Address</strong>: {teacher.address}
                  </p>
                </div>
                <div className="col-3">
                  <Button>
                    <NavLink
                      to={`teacher/${teacher.id}`}
                      className="nav-link  "
                    >
                      {" "}
                      View full details
                    </NavLink>
                  </Button>
                  <Button>
                    <NavLink to="/" className="nav-link  ">
                      {" "}
                      Hire me
                    </NavLink>
                  </Button>
                  <Button>
                    <NavLink to="/" className="nav-link  ">
                      {" "}
                      Message
                    </NavLink>
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </>
  );
}

export default ListTeacher;
