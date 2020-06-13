import React from "react";

const CampusView = (props) => {
  let studentDisplay;
  if (props.campus.students) {
    studentDisplay = (
      <div>
        <p>{props.campus.students.length} Students</p>
        {props.campus.students.map((student) => (
          <div key={student.id}>{student.firstName}</div>
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
