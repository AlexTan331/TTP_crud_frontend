import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-studengs">There are no students</div>;
  }

  return (
    <div className="all-students">
      <Link to="/students/new"><button>add student</button></Link>
      {props.allStudents.map((students) => (
        <div key={students.id}>
          <img src={students.imageUrl} alt="student"></img>
          <Link to={`/students/${students.id}`}>
            {" "}
            <h4>
              student name: {students.firstName} {students.lastName}
            </h4>
          </Link>
          <Link to={`/campuses/${students.campus.id}`}>
            {" "}
            <h4>campus name: {students.campus.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
