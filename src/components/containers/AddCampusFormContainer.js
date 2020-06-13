import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddCampusFormView } from "../views";
import { addCampusThunk } from "../../thunks";

class AddCampusFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
      isValidName: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value }, this.validateName);
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateName = () => {
    const { name } = this.state;
    let errors = { ...this.state.errors };
    // set a valid boolean to true
    let isValidName = true;
    // check if the value is valid
    if (name.length < 2) {
      // if not, set the value to false and add error message
      isValidName = false;
      errors.name = "Invalid campus name";
    }
    //
    // setstate with isValidName
    if (isValidName) {
      errors.name = "valid name";
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidName) this.props.addCampus(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.name}
        <AddCampusFormView
          name={this.state.name}
          address={this.state.address}
          description={this.state.description}
          imageUrl={this.state.imageUrl}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus, ownProps)),
  };
};

AddCampusFormContainer.propTypes = {
  addCampus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddCampusFormContainer);
