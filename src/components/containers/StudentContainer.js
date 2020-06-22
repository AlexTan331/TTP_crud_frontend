import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchAllCampusesThunk, fetchStudentThunk, deleteStudentThunk } from "../../thunks";

import { StudentView } from "../views";

class StudentContainer extends Component {
  constructor() {
    super();
    this.state= {
      selectedCampus: "",
      campusId: 0,
    }
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
    this.props.fetchStudent(this.props.match.params.id);

  }

  componentDidUpdate (prePros, prevState) {
    this.props.fetchCampus(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
  }

  handleDelete = (id) => {
    this.props.deleteStudent(id);
  };

  handleChange = (e) => {
    this.setState({ selectedCampus : e.target.value, campusId: e.target.options.selectedIndex});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editCampus(id, this.state);
  }

  render() {
    return (
      <StudentView
        student={this.props.student}
        allCampuses={this.props.allCampuses}
        handleDelete={this.handleDelete}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    // enrollStudent: () => dispatch(enrollStudentThunk()),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
