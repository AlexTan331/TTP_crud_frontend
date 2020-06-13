import React from "react";

const CampusView = (props) => {
  let studentDisplay;
  if (props.campus.students) {
    studentDisplay = (
      <div>
        <p>{props.campus.students.length} Students</p>
        {props.campus.students.map((student) => (
          <div key={student.id}>
            <img src={student.imageUrl} alt="student">
            </img>
            <h4>{student.firstName} {student.lastName}</h4>
            <h4>{student.email}</h4>
            <h4>{student.gpa}</h4>
          </div>
        ))}
      </div>
    );
  } else {
    studentDisplay = <p>There are no students enrolled</p>;
  }

  return (
    <>
      <img src={props.campus.imageUrl} alt={props.campus.name} />
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>

      <p>{props.campus.description}</p>
      {studentDisplay}
    </>
  );
};

export default CampusView;
