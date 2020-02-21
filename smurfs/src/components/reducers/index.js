import {
  GETTING_SMURF_START,
  GETTING_SMURF_SUCCESS,
  GETTING_SMURF_FAILURE,
  SUBMITTING_SMURF_START,
  SUBMITTING_SMURF_SUCCESS,
  SUBMITTING_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURF_START:
      return {
        ...state,
        loading: true
      };
    case GETTING_SMURF_SUCCESS:
      return {
        ...state,
        loading: false,
        smurfs: action.payload
      };

    case GETTING_SMURF_FAILURE:
      return {
        ...state,
        loading: false
      };
    case SUBMITTING_SMURF_START:
      return {
        ...state,
        loading: true
      };
    case SUBMITTING_SMURF_SUCCESS:
      return {
        ...state,
        loading: false,
        smurfs: [...state.smurfs, action.payload]
      };

    case SUBMITTING_SMURF_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
