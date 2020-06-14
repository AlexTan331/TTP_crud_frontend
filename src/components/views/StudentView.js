import React from "react";
import { Link } from "react-router-dom";

const StudentView = (props) => {
  let campusDisplay;
  if (props.student.campus) {
    campusDisplay = (
      <div>
        <Link to={`/students/${props.student.id}/edit`}><button>edit</button></Link>
        <h2>This student is registered to a campus</h2>
        <div className="student-campus">
          <img src={props.student.campus.imageUrl} alt="campus"></img>
          <Link to={`/campuses/${props.student.campus.id}`}>
            <h4>Campus name: {props.student.campus.name}</h4>
          </Link>
          {/* <h4>{props.student.length} student</h4> */}
        </div>
      </div>
    );
  } else {
    campusDisplay = <p>This student is not registered to a campus.</p>;
  }

  return (
    <>
      <h1>Show Student</h1>
      {/*add navbar here*/}
      <div>
        <img src={props.student.imageUrl} alt={props.student.firstName} />
        <h1>
          {props.student.firstName} {props.student.lastName}
        </h1>
        <h3>GPA: {props.student.gpa}</h3>
      </div>

      {campusDisplay}
    </>
  );
};

export default StudentView;
