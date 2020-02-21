import axios from "axios";

export const GETTING_SMURF_START = "GETTING_SMURF_START";
export const GETTING_SMURF_SUCCESS = "GETTING_SMURF_SUCCESS";
export const GETTING_SMURF_FAILURE = "GETTING_SMURF_FAILURE";

export const SUBMITTING_SMURF_START = "SUBMITTING_SMURF_START";
export const SUBMITTING_SMURF_SUCCESS = "SUBMITTING_SMURF_SUCCESS";
export const SUBMITTING_SMURF_FAILURE = "SUBMITTING_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      // console.log(res.data)
      dispatch({ type: GETTING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: GETTING_SMURF_FAILURE });
    });
};

export const submitSmurf = newSmurf => dispatch => {
  // console.log(newSmurf)
  dispatch({ type: SUBMITTING_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log(`this one:`, res.data);
      dispatch({ type: SUBMITTING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: SUBMITTING_SMURF_FAILURE });
    });
};
