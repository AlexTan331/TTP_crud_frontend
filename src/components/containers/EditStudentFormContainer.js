import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchStudentThunk, editStudentThunk } from "../../thunks";
import { connect } from "react-redux";
import { EditStudentFormView } from "../views";

class EditStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: 0,
    };
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id).then(({ payload }) => {
      console.log("....." + payload.gpa);
      this.setState(payload);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editStudent(id, this.state);
  };

  render() {
    return (
      <EditStudentFormView
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        imageUrl={this.state.imageUrl}
        gpa={this.state.gpa}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapState = (state) => {
  return { student: state.student };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (id, student) => dispatch(editStudentThunk(id, student, ownProps)),
  };
};

EditStudentFormContainer.propTypes = {
  fetchStudent: PropTypes.func.isRequired,
  editStudent: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(EditStudentFormContainer);
