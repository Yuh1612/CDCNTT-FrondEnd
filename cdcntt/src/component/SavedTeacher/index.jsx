import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NavLink from 'react-bootstrap/NavLink';
import './index.css';
import { useNavigate } from "react-router-dom";
import ListTeacher from '../ListGroup';



export default function SavedTeacher() {
    const navigate = useNavigate();
    return (
        <div className="SavedTeacher">
            <div className="row" id='SavedTeacherRow' >
            <div className="col-2"></div>
            <div className="col-8">
                <h4>MY TEACHER</h4>
                <div className="NoClassDiv">
                    <img className="NoClass" src='https://static.preply.com/space/images/empty-state-lessons.717db30f84c3af9eaf834499c0b504c7.png' alt='NoClass'></img>
                    <h5>You haven't choosen any teachers yet.</h5>
                    <Button onClick={() => navigate('/')}>

                        <NavLink to="userprofile" className='nav-link  '>Find your teacher now.</NavLink>
                    </Button>
                </div>

            </div>
            {/* <div className="col-8">
            <ListTeacher/>

            </div> */}
            <div className="col-2"></div>
            </div>
            


        </div>
    )
}