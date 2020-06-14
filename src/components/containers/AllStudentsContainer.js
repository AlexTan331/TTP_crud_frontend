import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk} from "../../thunks";
import { AllStudentsView } from "../views";

// Smart container;
class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }
  render() {
    
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
