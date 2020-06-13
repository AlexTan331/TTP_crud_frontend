import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-studengs">There are no students</div>;
  }

  return (
    <div className="all-students">
      {props.allStudents.map((students) => (
        <div key={students.id}>
          <h1>{students.firstName}</h1>
        </div>

      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
