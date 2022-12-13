import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/ApiFunction";
import ListTeacher from "../../component/ListGroup";
import "./Search.css";
function Search() {
  const [availableTeachers, setAvailableTeachers] = useState([]);
  const { query } = useParams();
  const getTeachers = async () => {
    const res = await api.searchTeacher(query);
    setAvailableTeachers(res.teacher);
  };
  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <div className="HomePage">
      <div className="row" id="RowListHomePage">
        <span>
          <h3>English Teacher :</h3>
        </span>

        <div className="col-2"></div>
        <div className="col-8">
          <ListTeacher availableTeachers={availableTeachers} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
export default Search;
