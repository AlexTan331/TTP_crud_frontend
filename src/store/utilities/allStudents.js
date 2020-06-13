import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
// const ADD_STUDENT = "ADD_STUDENT";
// const EDIT_STUDENT = "EDIT_STUDENT";
// const DELETE_STUDENT = "DELETE_STUDENT";

// ACTION CREATORS;
const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students,
  };
};

// const addStudent = (student) => {
//   return {
//     type: ADD_STUDENT,
//     payload: student,
//   };
// };

// const editStudent = (student) => {
//   return {
//     type: EDIT_STUDENT,
//     payload: student,
//   };
// };

// const deleteStudent = (id) => {
//   return {
//     type: DELETE_STUDENT,
//     payload: id,
//   };
// };

// THUNK CREATORS;
export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get("/api/students")
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.log(err));
};

// export const addCampusThunk = (campus, ownProps) => (dispatch) => {
//   return axios
//     .post("/api/campuses", campus)
//     .then((res) => res.data)
//     .then((newCampus) => {
//       dispatch(addCampus(newCampus));
//       ownProps.history.push(`/campuses/${newCampus.id}`);
//     })
//     .catch((err) => console.log(err));
// };

// export const editCampusThunk = (id, campus) => (dispatch) => {
//   return axios
//     .put(`/api/campuses/${id}`, campus)
//     .then((res) => res.data)
//     .then((updatedCampus) => dispatch(editCampus(updatedCampus)))
//     .catch((err) => console.log(err));
// };

// export const deleteCampusThunk = (id) => (dispatch) => {
//   return axios
//     .delete(`/api/campuses/${id}`)
//     .then((res) => res.data)
//     .then(() => dispatch(deleteCampus(id)))
//     .catch((err) => console.log(err));
// };

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    // case ADD_CAMPUS:
    //   return [...state, action.payload];
    // case EDIT_CAMPUS:
    //   return [...state, action.payload];
    // case DELETE_CAMPUS:
    //   console.log(action.payload);
    //   return state.filter((campus) => campus.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
