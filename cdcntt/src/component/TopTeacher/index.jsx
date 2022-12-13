import { AiFillStar } from "react-icons/ai";
import "./index.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function TopTeacher(teachers) {
  console.log(teachers);
  return (
    <>
      {teachers?.teachers?.map((teacher, index) => {
        return (
          <div className="TopTeacher">
            <img
              src="https://avatars.preply.com/i/logos/i/logos/avatar_jfuhkgwf9ho.jpg?d=160x160&f=webp"
              alt="TopTeacherImg"
              className="TopTeacherImg"
            />
            <h6>
              {teacher.lastName} {teacher.firstName}
            </h6>
            <div className="Introduction">
              <AiFillStar className="Star" />
              <p>{teacher.rating}</p>
            </div>
            <p>Speak: English(native)</p>
            <Button>
              <NavLink to={`teacher/${teacher.id}`} className="nav-link  ">
                {" "}
                View full details
              </NavLink>
            </Button>
          </div>
        );
      })}
    </>
  );
}
