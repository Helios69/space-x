import { PUT_DATA, PUT_MORE, SHOW_ERROR } from "../actions";

const initialState = {
  history: [],
  upcoming: [],
  page: 1,
  fetchingError: false
};

const launchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return {
        ...state,
        history: action.payload.history,
        upcoming: action.payload.upcoming,
      };
    case PUT_MORE:
      return {
        ...state,
        page: state.page + 1,
        history: [...state.history, ...action.payload],
      };
    case SHOW_ERROR:
      return {
        ...state,
        fetchingError: true
      };
    default:
      return state;
  }
};

export default launchesReducer;
